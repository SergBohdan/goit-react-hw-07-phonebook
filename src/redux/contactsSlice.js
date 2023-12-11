import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';


const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

 const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

 const handleGetFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items = payload;
};

const handleAddFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  state.items.push(payload);
};

const handleDeleteFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.error = null;
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, handleGetFulfilled)
      .addCase(fetchContacts.rejected, handleRejected)

      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, handleAddFulfilled)
      .addCase(addContact.rejected, handleRejected)

      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, handleDeleteFulfilled)
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;