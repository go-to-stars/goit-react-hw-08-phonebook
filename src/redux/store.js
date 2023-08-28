import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { themeReducer } from './theme/themeSlice';
import { authReducer } from './auth/authSlice';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filterSlice';

// import { contactsReducer } from './contacts/contactsSlice';

// import { persistedThemeReducer } from './theme/themeSlice';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     filter: filterReducer,
//   }, // імена функцій редюсерів, що зберігають стани у сховищі Redux
// }); // абстракція над стандартною createStore функцією Redux, яка додає параметри за замовчуванням до налаштувань сховища для кращого досвіду розробки

// const persistContactsConfig = {
//   key: 'phonebook_contacts',
//   storage,
// }; // конфігурація persist-редюсера (назва ключа у localstorage (key) та сховище (storage))

// export const persistedContactsReducer = persistReducer(
//   persistContactsConfig,
//   contactsReducer
// ); // експорт persist-редюсера

const persistedThemeConfig = {
  key: 'phonebook_theme',
  storage,
}; // конфігурація persist-редюсера (назва ключа у localstorage (key) та сховище (storage))

const persistedThemeReducer = persistReducer(
  persistedThemeConfig,
  themeReducer
); // persist-редюсер

const persistAuthConfig = {
  key: 'phonebook_auth',
  storage,
  whitelist: ['token'],
}; // конфігурація persist-редюсера (назва ключа у localstorage (key) та сховище (storage))

// const persistAuthReducer = persistedReducer(
//   { key: 'Auth', storage, whitelist: ['token'] },
//   authReducer
// );

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    theme: persistedThemeReducer,
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  }, // імена функцій редюсерів, що зберігають стани у сховищі Redux
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }), // проміжна вставка (до редюсера) для ігнорування дій (ignoredActions), що викликають помилки (на старті програми, поки не вичитані дані або вони відсутні і т.ін)
}); // абстракція над стандартною createStore функцією Redux, яка додає параметри за замовчуванням до налаштувань сховища для кращого досвіду розробки

export const persistor = persistStore(store); // посилання для persistor-сховища localhost на оригінальне сховище Redux
