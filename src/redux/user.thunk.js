import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserAPI } from 'services/userApi';

////////////////////////////////////////////////////////////

export const registerThunk = createAsyncThunk(
  'user/register',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.register(formData);
      localStorage.setItem('token', response.token);

      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'user/login',
  async (formData, thunkAPI) => {
    try {
      const response = await UserAPI.login(formData);
      localStorage.setItem('token', response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const logOutThunk = createAsyncThunk(
  'user/logout',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.userLogOutRequest();
      localStorage.setItem('token', response.token);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
export const curentUserThunk = createAsyncThunk(
  'user/curentUserThunk',
  async (_, thunkAPI) => {
    try {
      const response = await UserAPI.getUserDetailsRequest();
      const token = localStorage.getItem('token', response.token);

      return { token, user: response };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
