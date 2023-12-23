import { RootState } from 'store';

export const productsSelector = (state: RootState) => state.products.products;
export const productsErrorSelector = (state: RootState) => state.products.errors.products;
export const productsPendingSelector = (state: RootState) => state.products.pending.products;

