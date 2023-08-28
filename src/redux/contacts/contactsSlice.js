import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import {
  getContacts,
  addContact,
  deleteContact,
  editCurrentContact,
} from './contactsOperations';

// const initialContactsState = {
//   contacts: [],
//   filteredName: '',
//   showModal: false,
//   editContact: null,
//   isDeleting: false,
// };

const isPending = state => {
  state.isLoading = true;
}; // функція isPending, змінює значення стейту isLoading на true

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
}; // функція isRejected, змінює значення стейту isLoading на false та записує в стейт текст повідомлення об'єкта помилки

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  }, // форма стану за замовчуванням
  reducers: {
    setEditModal(state) {
      state.showModal = !state.showModal;
    },
    setEditContact(state, action) {
      state.editContact = action.payload;
    },
  },
  extraReducers: {
    [getContacts.pending]: isPending, // очікування завантаження списку контактів (стан isLoading = true)
    [getContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    }, // успішне виконання запиту (список контактів): зміна стану isLoading на false, обнулення помилки, запис даних (списку контактів) в стан
    [getContacts.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту списку контактів, зміна стану isLoading на false
    [addContact.pending]: isPending, // очікування завантаження списку контактів після додавання контакту (стан isLoading = true)
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    }, // успішне виконання запиту (додавання контакту): зміна стану isLoading на false, обнулення помилки, запис даних (списку контактів з доданим) в стан
    [addContact.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту списку контактів, після додавання, зміна стану isLoading на false
    [deleteContact.pending]: isPending, // очікування завантаження списку контактів після видалення контакту (стан isLoading = true)
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.splice(
        state.items.findIndex(contact => contact.id === action.payload.id),
        1
      );
    }, // успішне виконання запиту (видалення контакту): зміна стану isLoading на false, обнулення помилки, запис даних (списку контактів після видалення) в стан
    [deleteContact.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту списку контактів, після додавання, зміна стану isLoading на false
  },
  [editCurrentContact.pending]: isPending, // очікування завантаження списку контактів після корегування контакту (стан isLoading = true)
  [editCurrentContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    // state.items = state.items.map(item =>
    //   item.id === action.payload.id ? action.payload : item
    // );
    state.items.splice(
      state.items.findIndex(contact => contact.id === action.payload.id),
      1,
      action.payload
    );
  }, // успішне виконання запиту (корегування контакту): зміна стану isLoading на false, обнулення помилки, запис даних (списку контактів з доданим) в стан
  [editCurrentContact.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту списку контактів, після корегування, зміна стану isLoading на false
});

export const { setFilteredName, setEditModal, setEditContact } =
  contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer; // експорт редюсера функції contactsSlice
