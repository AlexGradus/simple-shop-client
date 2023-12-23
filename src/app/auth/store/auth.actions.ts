import { createAsyncThunk } from '@reduxjs/toolkit';
import { ErrorResponse } from 'app/users/types/error.type';
import { FieldValues } from 'react-hook-form';
import repository from 'repository';
import { saveToSessionStorage } from 'utils/storageUtils';

export const signIn = createAsyncThunk(
  'POST/auth/sign-in',
  async ({ email, password }: FieldValues, { rejectWithValue }) => {
    try {
      const response = await repository.post('/auth/sign-in/', { email, password });
      sessionStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (error) {
      return rejectWithValue({ error: "Invalid Password or Email!" });
    }
  }
);

export const signUp = createAsyncThunk(
  'Post/auth/sign-up',
  async ({ email, password }: FieldValues, { rejectWithValue }) => {
    try {
      sessionStorage.removeItem('accessToken');
      const response = await repository.post('/auth/registration/', { email, password });
      sessionStorage.setItem('accessToken', response.data.accessToken);
      return response.data;
    } catch (error) {
      
      const errorMessage = (error as ErrorResponse)?.response?.data.message;
      return rejectWithValue({ error: errorMessage });
    }
  }
);

export const signOut = createAsyncThunk(
  'GET/auth/sign-out',
  async (_, { rejectWithValue }) => {
    try {
      await repository.get('/auth/sign-out');
      sessionStorage.removeItem('accessToken');
      saveToSessionStorage('cart', []);
    } catch (error) {
      const errorMessage = (error as ErrorResponse)?.response?.data.message;
      return rejectWithValue({ error: errorMessage });
    }
  }
);
