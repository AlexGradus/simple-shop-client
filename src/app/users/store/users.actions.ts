import { createAsyncThunk } from '@reduxjs/toolkit';
import repository from 'repository';
import { UserDto } from '../types/user.dto';
import { ErrorResponse } from '../types/error.type';


export const signOut = createAsyncThunk('GET/auth/sign-out', async (_, { rejectWithValue }) => {
  try {
    const response = await repository.get(`/auth/sign-out`);
    sessionStorage.removeItem('accessToken');
    return response.data;
  } catch (error) {
    const errorMessage = (error as ErrorResponse)?.error?.response?.data;
    return rejectWithValue({ error: errorMessage });
  }
});

export const getUser = createAsyncThunk<UserDto>('GET/users/current', async (_, { rejectWithValue }) => {
  try {
    const response = await repository.get(`/users/current`);
    return response.data;
  } catch (error) {
    const errorMessage = (error as ErrorResponse)?.error?.response?.data;
    return rejectWithValue({ error: errorMessage });
  }
});


export const getUserOrders = createAsyncThunk('GET/orders', async (_, { rejectWithValue }) => {
  try {
    const response = await repository.get(`/orders/`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error);
  }
});


