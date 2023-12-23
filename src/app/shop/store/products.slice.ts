import { createSlice } from "@reduxjs/toolkit";

import { ProductState } from "app/shop/types/product-state";
import { getProducts } from "./products.actions";


const initialState: ProductState = {
  
  products: [],
 
  pending: {
    products: false,
    
  },
  errors: {
    products: null,
   
  },
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.pending.products = true;
        state.errors.products = null;
      })
      .addCase(getProducts.fulfilled, (state, { payload }) => {
        state.pending.products = false;
        state.products = payload;
      })
      .addCase(
        getProducts.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.products = false;
          state.errors.products = action.payload.error.message;
        }
      )
  },
});
