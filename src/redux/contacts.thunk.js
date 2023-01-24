import { createAsyncThunk } from '@reduxjs/toolkit';
import { ContactsAPI } from 'services/userApi';

/////////////////////////////////////////////////////////////////////////

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await ContactsAPI.getContactsRequest();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchContactsDelete = createAsyncThunk(
  'contacts/fetchContactsDelete',
  async (contactsId, { rejectWithValue, dispatch }) => {
    try {
      //const { data } = await contactsApi.delete(`/contacts/${contactsId}`);
      //return data;
      await ContactsAPI.deleteContactRequest(contactsId);
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const fetchContactsAdd = createAsyncThunk(
  'contacts/fetchContactsAdd',
  async (name, { rejectWithValue, dispatch }) => {
    try {
      // const { data } = await contactsApi.post('/contacts', name);
      // return data;
      await ContactsAPI.addContactRequest(name);
      dispatch(fetchContacts());
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
