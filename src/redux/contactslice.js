import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  error: null,
  isLoading: false,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfiled = (state, action) => {
  state.isLoading = false;
  state.error = null;
};

const handleFulfiledFetch = (state, { payload }) => {
  state.items = payload;
};

const handleFulfiledAdd = (state, { payload }) => {
  state.items.push(payload);
};

const handleFulfiledDelete = (state, { payload }) => {
  const index = state.items.findIndex(contact => contact.id === payload.id);
  state.items.splice(index, 1);
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFulfiledFetch)
      .addCase(addContact.fulfilled, handleFulfiledAdd)
      .addCase(deleteContact.fulfilled, handleFulfiledDelete)
      .addMatcher(
        isAnyOf(
          fetchContacts.rejected,
          addContact.rejected,
          deleteContact.rejected
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.pending,
          addContact.pending,
          deleteContact.pending
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(
          fetchContacts.fulfilled,
          addContact.pending,
          deleteContact.pending
        ),
        handleFulfiled
      );
  },
});

export const contactsReducer = contactSlice.reducer;