import { createReducer } from '@reduxjs/toolkit';
import { addContact, removeContact } from 'redux/actions/contactsActions';
import phoneContacts from 'data/phoneContacts';

const initialState = phoneContacts;

const contactsReducer = createReducer(initialState, {
  [addContact]: (state, { payload }) => (state = [payload, ...state]),
  [removeContact]: (state, { payload }) =>
    (state = state.filter(c => c.id !== payload)),
});

export default contactsReducer;
