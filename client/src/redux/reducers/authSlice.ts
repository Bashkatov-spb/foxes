/* eslint-disable @typescript-eslint/default-param-last */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { AuthState } from '../types';
import * as api from '../../App/api';
import type { UserWithoutId } from '../../features/users/types/User';

const initialState: AuthState = {
  user: undefined,
  error: null,
};

export const checkUser = createAsyncThunk('auth/check', () => api.fetchCheckUser());

export const signUp = createAsyncThunk('auth/signup', (user: UserWithoutId) =>
  api.fetchSignUp(user),
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(checkUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(checkUser.rejected, (state, action) => {
        state.error = action.error.message ? action.error.message : null;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.error = action.error.message ?? null;
      });
  },
});

export default authSlice.reducer;
