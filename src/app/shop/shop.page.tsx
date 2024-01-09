import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import { getProducts } from "./store/products.actions";
import {
  productsPendingSelector,
  productsSelector,
} from "./store/products.selectors";
import Header from "components/header";
import Loader from "components/loader";
import ProductCardComponent from "./components/product-card";
import { ProductDto } from "./types/product.dto";
import { Content } from "components/styled/components.styled";



const ShopPage: FC = () => {
  const products = useSelector(productsSelector);
  const dispatch = useDispatch();
  const pendingProducts = useSelector(productsPendingSelector);

  useEffect(() => {
    dispatch<any>(getProducts());
  }, [dispatch]);

  return (
    <><Header /><Content>
      {pendingProducts && <Loader />}
      {!pendingProducts &&
        products.map((item: ProductDto) => (
          <Grid item xs={12} sm={6} lg={2} key={item.id}>
            <ProductCardComponent {...item} />
          </Grid>
        ))}
    </Content></>
  );
};

export default ShopPage;
