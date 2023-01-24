import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/userApi';

/////////////////////////////////////////////////////////////////////////

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.getContactsRequest();
      return response;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchContactsDelete = createAsyncThunk(
  'contacts/fetchContactsDelete',
  async (contactsId, { rejectWithValue, dispatch }) => {
    try {
      //const  response  = await contactsApi.delete(contactsId);
      //return response;
      await ContactsAPI.deleteContactRequest(contactsId);
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchContactsAdd = createAsyncThunk(
  'contacts/fetchContactsAdd',
  async (name, { rejectWithValue }) => {
    try {
      const response = await ContactsAPI.addContactRequest(name);
      return response;
      // await ContactsAPI.addContactRequest(name);
      // dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
