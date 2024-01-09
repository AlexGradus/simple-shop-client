import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getFromSessionStorage, saveToSessionStorage } from 'utils/storageUtils';
import { placeOrder } from 'app/cart/store/cart.actions';
import { CartState } from 'app/cart/types/cart-state';
import { CartItem } from 'app/cart/types/cart-item.dto';


const initialState: CartState = {
  items: getFromSessionStorage('cart') || [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      saveToSessionStorage('cart', state.items);
    },
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      saveToSessionStorage('cart', state.items);
    },
    clearCart: (state) => {
      state.items = [];
      saveToSessionStorage('cart', []);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(placeOrder.fulfilled, (state) => {
      state.items = [];
      saveToSessionStorage('cart', []);
    });
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
