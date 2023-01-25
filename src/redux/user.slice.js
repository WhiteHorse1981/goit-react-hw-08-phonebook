import { createSlice } from '@reduxjs/toolkit';
import {
  curentUserThunk,
  loginThunk,
  logOutThunk,
  registerThunk,
} from './user.thunk';

const initialState = {
  userData: null,
  token: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'authUser',
  initialState,
  extraReducers: builder =>
    builder
      ///////////////Register////////////////////////////////
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        registerThunk.fulfilled,
        (state, { payload: { user, token } }) => {
          state.isLoading = false;
          state.userData = user;
          state.token = token;
        }
      )
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      ///////////////Login////////////////////////////////
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload: { user, token } }) => {
        state.isLoading = false;
        state.userData = user;
        state.token = token;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      ///////////////////////LoginOut////////////////////////////////////////////////
      .addCase(logOutThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logOutThunk.fulfilled, state => {
        state.isLoading = false;
        state.userData = null;
        state.token = null;
      })
      .addCase(logOutThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      /////////////////////////curentUserThunk///////////////////////////////////////
      .addCase(curentUserThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        curentUserThunk.fulfilled,
        (state, { payload: { user, token } }) => {
          state.isLoading = false;
          state.userData = user;
          state.token = token;
        }
      )
      .addCase(curentUserThunk.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      }),
});

export const authReducer = userSlice.reducer;
