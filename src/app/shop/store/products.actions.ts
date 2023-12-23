import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "repository";
import { ProductDto } from "app/shop/types/product.dto";

export const getProducts = createAsyncThunk<ProductDto[]>(
  "GET/products/",
  async (_, { rejectWithValue }) => {
    try {
      const response = await repository.get("/products/");
      return response.data;
    } catch (error: any) {
      return rejectWithValue({ error: 'Failed to fetch products', originalError: error?.response?.data });
    }
  }
);
