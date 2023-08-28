import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
}; // значення стану за замовчуванням

const isPending = state => {
  state.isLoading = true;
}; // функція isPending, змінює значення стейту isLoading на true

const isRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.isLoggedIn = false;
  state.token = null;
}; // функція isRejected, змінює значення стейту isLoading на false та записує в стейт текст повідомлення об'єкта помилки

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.pending]: isPending, // очікування реєстрації користувача (стан isLoading = true)
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    }, // успішне виконання реєстрації користувача: зміна стану isLoading на false, обнулення помилки, запис даних (ім'я та пошта) в стан, запис токену в стан, зміна стану isLoggedIn на true
    [register.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу запиту реєстрації користувача, зміна стану isLoading на false
    [logIn.pending]: isPending, // очікування авторизації користувача (стан isLoading = true)
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    }, // успішне виконання авторизації користувача: зміна стану isLoading на false, обнулення помилки, запис даних (ім'я та пошта) в стан, запис токену в стан, зміна стану isLoggedIn на true
    [logIn.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу виконання авторизації користувача, зміна стану isLoading на false
    [logOut.pending]: isPending, // очікування деавторизації користувача (стан isLoading = true)
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
      state.error = null;
    }, // успішне виконання деавторизації користувача: зміна стану isLoading на false, обнулення помилки, обнулення даних (ім'я та пошта) в стані, обнулення токену в стані, зміна стану isLoggedIn на false
    [logOut.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу виконання деавторизації користувача, зміна стану isLoading на false
    [getCurrentUser.pending]: isPending, // очікування запиту поточного користувача (стан isLoading = true)
    [getCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isLoading = false;
      state.error = null;
    }, // успішне виконання запиту поточного користувача: зміна стану isLoading на false, обнулення помилки, запис даних (ім'я та пошта) в стан, запис токену в стан, зміна стану isLoggedIn на true
    [getCurrentUser.rejected]: isRejected, // одержання повідомлення з обєкту помилки при відхилення промісу виконання запиту поточного користувача, зміна стану isLoading на false
  },
});

export const authReducer = authSlice.reducer; // експорт редюсера функції authSlice
