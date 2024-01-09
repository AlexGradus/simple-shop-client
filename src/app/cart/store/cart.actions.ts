import { createAsyncThunk } from "@reduxjs/toolkit";
import repository from "repository";
import { CardOrderDto } from "app/cart/types/cart-order.dto";



export const placeOrder = createAsyncThunk(
  'POST/placeOrder',
  async (orderDto: CardOrderDto[], { rejectWithValue }) => {
    try {
      const response = await repository.post('orders/place-order', { items: orderDto });
      return response.data;
    } catch (error: any) {
      const originalError = error?.response?.data || 'Unknown error';
      return rejectWithValue({ error: 'Failed to place the order', originalError });
    }
  }
);

