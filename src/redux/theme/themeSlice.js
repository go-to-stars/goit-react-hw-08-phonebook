import { createSlice } from '@reduxjs/toolkit';

const initialThemeState = {
  theme: 'light',
}; // стан з даними по замовчуванню

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialThemeState,
  reducers: {
    toggleTheme(state) {
      console.log(state.theme);
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
  },
}); // функція themeSlice, яка приймає «ім’я фрагмента» (name), початковий стан (initialState) та об’єкт функції редюсера (toggleTheme) та автоматично генерує ді. (action), які відповідаю'ть' редюсерe і стану (state)

export const themeReducer = themeSlice.reducer; // експорт редюсера функції themeSlice

export const { toggleTheme } = themeSlice.actions; // експорт функцій редюсера (toggleTheme) для генерації дій (actions) функції themeSlice
