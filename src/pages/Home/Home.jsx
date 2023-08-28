import React from 'react';
import { useSelector } from 'react-redux';
import { selectError } from '../../redux/contacts/contactsSelectors';
import {
  Img,
  ContainerHome,
  TitleHome,
  ErrorTextHome,
  TextHome,
} from './Home.styled';

const Home = () => {
  const error = useSelector(selectError); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора selectError

  return (
    <ContainerHome>
      <TitleHome>Welcome to your Phonebook!</TitleHome>
      <Img />
      <TextHome>
        Looking for an app where you can store your contacts? You found it! We
        are sure you will enjoy using our app! Convenient viewing and editing
        contacts, check for yourself!
      </TextHome>
      {error && <ErrorTextHome>{error.message}</ErrorTextHome>}
    </ContainerHome>
  );
}; // функція Home повертає для рендеру розмітку сторінки Home

export default Home; // дефолтний експорт функції Home
