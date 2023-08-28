import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from '../../redux/auth/authOperations';
import {
  selectError,
  selectIsLoading,
} from '../../redux/contacts/contactsSelectors';
import { Loader } from '../../components/Loader/Loader';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Title,
  FormContainer,
  Label,
  Input,
  Button,
  Error,
  ErrorText,
} from './Login.styled'; // імпорт стилів тегів form (FormContainer), label (Label), input (Input), button (Button)

const emailRegex = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/; // регулярний вираз для електронної пошти
const passwordRegex =
  /(?=^.{5,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])|(?=.*[a-z]).*$/; // регулярний вираз для паролю

const schema = Yup.object().shape({
  email: Yup.string()
    .min(5, 'Too Short!')
    .max(35, 'Too Long!')
    .email()
    .matches(emailRegex, 'Email is not valid!')
    .trim()
    .required('Required!'),
  password: Yup.string()
    .min(5, 'Too Short!')
    .max(25, 'Too Long!')
    .matches(passwordRegex, 'Password is not valid!')
    .trim()
    .required('Required!'),
}); // валідація полів форми

const INITIAL_STATE = {
  email: '',
  password: '',
}; // ініціалізація полів форми

const Login = () => {
  const dispatch = useDispatch(); //виклик хука useDispatch повертає посилання на dispatch функцію зі сховища Redux, для відправки action за потреби
  const error = useSelector(selectError); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора selectError
  const loading = useSelector(selectIsLoading); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора selectIsLoading

  const handleSubmit = e => {
    const { email, password } = e; // деструктуризація полів форми, що викликала подію onSubmit

    dispatch(logIn({ email, password })); // запуск методу dispatch сховища redux, що викликає функцію register з аргументами { name, email, password }, що потрапляють у запит у вигляді змінної credentials

    e.email = ''; // очищення поля email форми
    e.password = ''; // очищення поля password форми
  };

  return (
    <>
      <Title>Autorisation</Title>
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <FormContainer>
          <Label htmlFor="email">
            Email
            <Input
              type="text"
              name="email"
              title="Email must be digits and can contain spaces, dashes, parentheses and can "
              placeholder="Please enter your Email."
            />
            <Error name="email" component="p" />
          </Label>
          <Label htmlFor="password">
            Password
            <Input
              type="password"
              name="password"
              title="The password must be at least 1 lowercase or uppercase Latin letter, numbers, special characters. Total minimum 5 and maximum 25 characters"
              placeholder="Please enter your Password."
            />
            <Error name="password" component="p" />
          </Label>
          <Button type="submit">Log In</Button>
        </FormContainer>
      </Formik>
      {loading && <Loader />}
      {error && (
        <ErrorText>
          Ooops, something went wrong... Try a bit later or reload page
        </ErrorText>
      )}
    </>
  ); // при настанні події onSubmit викликається функція handleSubmit
}; // повернення для рендеру розмітки форми (теги Label, Input та Error для кожного поля форми,тег Button, спінер Loader та поле помилки ErrorText)

export default Login;
