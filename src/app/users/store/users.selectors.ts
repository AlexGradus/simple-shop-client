import { RootState } from 'store';

export const userSelector = (state: RootState) => state.users;
export const userPendingSelector = (state: RootState) => state.users.pending.user;
export const userOrdersPendingSelector = (state: RootState) => state.users.pending.userOrders;
