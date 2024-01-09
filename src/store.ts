import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "app/auth/store/auth.slice";
import { cartSlice } from "app/cart/store/cart.slice";

import { productsSlice } from "app/shop/store/products.slice";

import { usersSlice } from "app/users/store/users.slice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    users: usersSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
