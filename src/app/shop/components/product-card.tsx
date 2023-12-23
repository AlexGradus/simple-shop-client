import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, TextField } from "@mui/material";
import { ProductDto } from "app/shop/types/product.dto";
import { saveToSessionStorage, getFromSessionStorage } from "utils/storageUtils";
import { CartItem } from "app/cart/types/cart-item.dto";

const ProductCardComponent: React.FC<ProductDto> = ({
  id,
  name,
  price,
  images,
  quantity,
}) => {

  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setSelectedQuantity(isNaN(value) ? 0 : value);
  };

  const handleAddToCart = () => {
    const existingCartItems:Array<CartItem> = getFromSessionStorage("cart") || [];
    const existingProductIndex = existingCartItems.findIndex(
      (item: CartItem) => item.id === id
    );

    if (existingProductIndex !== -1) {
      existingCartItems[existingProductIndex].quantity += selectedQuantity;
    } else {
      existingCartItems.push({ id, quantity: selectedQuantity, name, price, images });
    }

    saveToSessionStorage("cart", existingCartItems);
    setSelectedQuantity(1);
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={images}
          alt={name}
        />
        <CardContent>
          <Typography
            sx={{
              margin: "0 auto",
              textAlign: "center",
              fontWeight: "bold",
              minHeight: "60px",
            }}
            variant="subtitle1"
            color="text.secondary"
          >
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="body2" color="text.secondary" noWrap>
          Available in Stock: {quantity}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ fontWeight: "bold" }}
        >
          {`${price}$`}
        </Typography>
        <TextField
          label="Quantity"
          type="number"
          InputProps={{ inputProps: { min: 1, max: quantity } }}
          value={selectedQuantity}
          onChange={handleQuantityChange}
        />
        {quantity > 0 && (
          <Button
            sx={{ display: "flex", margin: "10px auto" }}
            size="medium"
            variant="outlined"
            color="success"
            onClick={handleAddToCart}
          >
            Add to Cart
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default ProductCardComponent;

