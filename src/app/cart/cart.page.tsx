import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, Grid, Typography } from '@mui/material';
import { cartSelector } from 'app/cart/store/cart.selectors';
import CartProduct from 'app/cart/components/cart-products';
import { placeOrder } from 'app/cart/store/cart.actions';
import { removeItem, clearCart } from 'app/cart/store/cart.slice';
import Header from 'components/header';

const CartViewPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(cartSelector);

  const handlePlaceOrder = () => {
    const orderDto = cartItems.map(item => ({ productId: item.id, quantity: item.quantity }));
    dispatch<any>(placeOrder(orderDto));
  };

  return (
    <><Header />
      <Typography variant="h4" mb={2}>
        My Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1" mb={2}>
          Cart empty
        </Typography>
      ) : (
        <>
        <Grid
            sx={{
              width: { xs: "80vw", lg: "100%" },
              overflow: "auto",
              padding: "0 5px",
              maxHeight: { xs: "80vh", lg: "100vh" },
            }}
          >
            {cartItems.map((item) => (
            <CartProduct key={item.id} {...item} onRemove={() => dispatch(removeItem(item))} />
          ))}
          </Grid>
          
          <Box mt={3} display="flex" justifyContent="start">
            <Button variant="outlined" color="secondary" onClick={handlePlaceOrder}>
              Place Order
            </Button>
            <Button variant="outlined" color="secondary" onClick={() => dispatch(clearCart())}>
              Clear Cart
            </Button>
          </Box>
        </>
      )}
  </>
  );
};

export default CartViewPage;
