import { configureStore } from '@reduxjs/toolkit';
import phonebookReduser from './phonebookSlice';
import { authReducer } from './user.slice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReduser,
    auth: authReducer,
  },
});
