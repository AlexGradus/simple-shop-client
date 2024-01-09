import { UserState } from "app/users/types/user-state";
import { getUser, getUserOrders, signOut } from "./users.actions";
import { createSlice } from "@reduxjs/toolkit";

const initialState: UserState = {
  user: null,
  userOrders: null,
  pending: {
    user: false,
    userOrders: false,
  },
  errors: {
    user: null,
    userOrders: null,
  },
  success: {
    user: null,
    userOrders: null,
  },
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.pending.user = true;
        state.errors.user = null;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.pending.user = false;
        state.user = payload;
      })
      .addCase(getUser.rejected, (state, action: any & { payload: any }) => {
        state.pending.user = false;
        state.errors.user = action.payload.message;
      })
      .addCase(getUserOrders.pending, (state) => {
        state.pending.userOrders = true;
        state.errors.userOrders = null;
      })
      .addCase(getUserOrders.fulfilled, (state, { payload }) => {
        state.pending.userOrders = false;
        state.userOrders = payload;
      })
      .addCase(
        getUserOrders.rejected,
        (state, action: any & { payload: any }) => {
          state.pending.userOrders = false;
          state.errors.userOrders = action.payload.message;
        }
      )

      .addCase(signOut.fulfilled, (state) => {
        state.user = null;
      });
  },
});
