import { createAction } from '@reduxjs/toolkit';

const deleteContact = createAction('form/deleteContact');
const filterChange = createAction('form/filterChange');
const formSubmit = createAction('form/formSubmit');

export { deleteContact, filterChange, formSubmit };
