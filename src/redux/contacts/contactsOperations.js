import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/'; // глобальні значення за замовчуванням для axios які будуть застосовані до кожного запиту

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts'); // запит списку контактів
      token.set(response.data.token);
      return response.data; // при успішному запиті повертаємо проміс із даними (список контактів)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція getContacts очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів)

export const addContact = createAsyncThunk(
  'contacts/postContact',
  async (contact, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      token.set(state.auth.token);

      const response = await axios.post('/contacts', contact); // запит на додавання контакту у список контактів (id генерує бекенд)
      return response.data; // при успішному запиті повертаємо проміс із даними (список контактів)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція addContact очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів після додавання контакту)

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      token.set(state.auth.token);

      const response = await axios.delete(`/contacts/${contactId}`); // запит на видалення контакту з id з списку контактів
      return response.data; //return; // при успішному запиті повертаємо проміс із даними (видалений контакт)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція deleteContact очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів після видалення контакту)

export const editCurrentContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, ...userUpdate }, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      token.set(state.auth.token);

      const response = await axios.patch(`/contacts/${id}`, userUpdate); // запит на зміну даних контакту з id з списку контактів
      return response.data; // при успішному запиті повертаємо проміс із даними (список контактів)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } // при помилці запиту повертаємо проміс, який буде відхилений з текстом помилки (функцію thunkAPI.rejectWithValue з аргументом - повідомленням об'єкта помилки)
  }
); // асинхронна фукція editContact очікує та повертає, за допомогою бібліотеки "axios", проміс отриманих даних (список контактів після оновлення контакту)
