import React, { useEffect, lazy, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../Layout/Layout';
import ScrollUpButton from '../ScrollUpButton/ScrollUpButton';
import { Container } from './App.stiled.jsx'; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)
import { useDispatch, } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { getCurrentUser } from '../../redux/auth/authOperations';

const Home = lazy(() => import('../../pages/Home/Home')); // розділення коду за допомогою динамічного імпорту сторінки Home
const Register = lazy(() => import('../../pages/Register/Register')); // розділення коду за допомогою динамічного імпорту сторінки Register
const Login = lazy(() => import('../../pages/Login/Login')); // розділення коду за допомогою динамічного імпорту сторінки Login
const Contacts = lazy(() => import('../../pages/Contacts/Contacts')); // розділення коду за допомогою динамічного імпорту сторінки Contacts

const App = () => {
  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />          
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />          
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<Login />} />
            }
          />          
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <Fragment>
        <ScrollUpButton />
      </Fragment>
    </Container>
  ); // повернення для рендеру розмітки застосунку "Книга контактів"
}; // функція App(), повертає компоненти з даними для рендеру сторінки

export default App; // дефолтний експорт функції App
