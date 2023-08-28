import { useDispatch, useSelector } from 'react-redux';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
// import { selectContacts } from '../../redux/contacts/contactsSelectors';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import Notiflix from 'notiflix';
import { BsX } from 'react-icons/bs';
import { editCurrentContact } from '../../redux/contacts/contactsOperations';
import {
  setEditModal  
} from '../../redux/contacts/contactsSlice';
import { selectEditContact } from '../../redux/contacts/contactsSelectors';
import {
  Backdrop,
  ModalWindow,
  Container,
  Title,
  FormContainer,
  Label,
  Error,
  Input,
  CloseBtn,
  Button,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const nameRegex = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/; // регулярний вираз для імені
const numberRegex = /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/; // регулярний вираз для номера телефону

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(nameRegex, 'Name is not valid!')
    .trim()
    .required('Required!'),
  number: Yup.string()
    .min(7, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(numberRegex, 'Phone number is not valid!')
    .trim()
    .required('Required!'),
}); // валідація полів форми

export const Modal = () => {
  const editCurrContact = useSelector(selectEditContact);
  const dispatch = useDispatch();
  // const contacts = useSelector(selectContacts); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора selectContacts

  useEffect(() => {
    function handleEscape(e) {
      if (e.code === 'Escape') {
        dispatch(setEditModal());
      }
    }
    window.addEventListener('keydown', handleEscape);
    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [dispatch]);

  const initialState = {
    name: editCurrContact.name,
    number: editCurrContact.number,
  }; // ініціалізація полів форми

  const handleSubmit = (values, { resetForm }) => {
    const name = values.name;
    const number = values.number;
    const user = { id: editCurrContact.id, name, number };  

    // if (
    //   contacts.find(
    //     item =>
    //       item.number
    //         .replaceAll('+', '')
    //         .replaceAll(' ', '')
    //         .replaceAll('(', '')
    //         .replaceAll(')', '')
    //         .replaceAll('-', '') ===
    //       number
    //         .replaceAll('+', '')
    //         .replaceAll(' ', '')
    //         .replaceAll('(', '')
    //         .replaceAll(')', '')
    //         .replaceAll('-', '')
    //   ) // при порівнянні видаляємо плюс, пробіли, дужки та тире, якщо вони є, для унеможливлення реєстрації однакових номерів з додатковими символами
    // ) {
    //   return Notiflix.Notify.warning(
    //     `Number ${number} ${name} is already in contacts`
    //   ); // якщо в списку контактів існує контакт з таким номером телефону, вийти та вивести відповідне повідомлення
    // }

    dispatch(editCurrentContact(user)); // інакше, виконує запит на редагування контакту  
    dispatch(setEditModal());
    resetForm(); // очищення полів форми
  }; // функція handleSubmit виконує запит на редагування контакту на сервер

  const handleBackdrop = e => {
    if (e.target === e.currentTarget) {
      dispatch(setEditModal());
    }
  };

  const handleClose = () => {
    dispatch(setEditModal());
  };

  const handleEscape = e => {
    if (e.code === 'Escape') {
      dispatch(setEditModal());
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdrop}>
      <ModalWindow onKeyDown={handleEscape}>
        <Container>
          <Title>Edit contacts</Title>
          <Formik
            initialValues={initialState}
            validationSchema={schema}
            onSubmit={handleSubmit}
          >
            <FormContainer>
              <Label htmlFor="name">
                Name
                <Input
                  type="text"
                  name="name"
                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                />
                <Error name="name" component="p" />
              </Label>
              <Label htmlFor="number">
                Number
                <Input
                  type="tel"
                  name="number"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                />
                <Error name="number" component="p" />
              </Label>
              <Button type="submit">Edit contact</Button>
            </FormContainer>
          </Formik>
          <CloseBtn onClick={handleClose}>
            <BsX size={25} />
          </CloseBtn>
        </Container>
      </ModalWindow>
    </Backdrop>,
    modalRoot
  );
};
