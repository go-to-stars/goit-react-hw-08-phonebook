import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { getContacts } from '../../redux/contacts/contactsOperations';
import {
  selectError,
  selectIsLoading,
  selectEditModal,
} from '../../redux/contacts/contactsSelectors';
import { Loader } from '../../components/Loader/Loader';
import { Modal } from '../../components/Modal/Modal';
import Notiflix from 'notiflix';
import { Box, TopTitle, Title } from './Contacts.styled'; // імпорт стилів тегів div (Container), div (Box), h1 (TopTitle), h2 (Title)

const Contacts = () => {
  const dispatch = useDispatch(); //виклик хука useDispatch повертає посилання на dispatch функцію зі сховища Redux, для відправки action за потреби
  const isLoading = useSelector(selectIsLoading); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux (стан isLoading) за допомогою функції селектора
  const error = useSelector(selectError); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux (стан error) за допомогою функції селектора
  const editModal = useSelector(selectEditModal);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]); // якщо викликана функція dispatch (ініційована зміна стану) то виконуємо запит на сервер (getContacts())

  return (   
    <Box>
      <TopTitle>Phonebook</TopTitle>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && <ContactList />}
      {error && Notiflix.Notify.failure(`${error}`)}
      {editModal && <Modal />}
    </Box>
    // </Container>
  );
}; // повернення розмітки списку контактів функції ContactList

export default Contacts;