import { createReducer } from '@reduxjs/toolkit';
import { deleteContact, formSubmit, filterChange } from './actions';

const contactsReducer = createReducer([], {
  [formSubmit]: (state, { payload }) => [payload, ...state],
  [deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filterReducer = createReducer('', {
  [filterChange]: (_, action) => action.payload,
});

export { contactsReducer, filterReducer };
