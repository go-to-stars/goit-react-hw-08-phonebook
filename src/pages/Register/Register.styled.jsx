import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const TitleReg = styled.h1`
  padding: 12px 0;

  font-size: 24px;
  text-align: center;

  @media (max-width: 1023.98px) {
    padding: 10px 0;

    font-size: 20px;
  }

  @media (max-width: 767.98px) {
    padding: 8px 0;

    font-size: 16px;
  }
`;

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 12px;
  width: 420px;
  padding: 8px;

  border: 2px solid currentColor;
  border-radius: 10px;

  @media (max-width: 1023.98px) {
    gap: 10px;
    width: 320px;
    padding: 6px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    gap: 8px;
    width: 220px;
    padding: 4px;

    border-radius: 6px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 10px;

  font-size: 20px;

  @media (max-width: 1023.98px) {
    gap: 6px;
    margin-bottom: 8px;

    font-size: 16px;
  }

  @media (max-width: 767.98px) {
    gap: 4px;
    margin-bottom: 6px;

    font-size: 12px;
  }
`;

export const Input = styled(Field)`
  width: 340px;
  height: 24px;
  padding-left: 12px;

  font-size: 18px;
  border: 1px solid currentColor;
  border-radius: 10px;
  color: inherit;
  background-color: inherit;

  &:hover {
    background-color: var(--light-focus-color);    
    color: #fff;
  }

  &:focus {   
    background-color: var(--light-focus-color);
    border-color: var(--light-focus-color);
    color: #000;
  }

  @media (max-width: 1023.98px) {
    width: 270px;
    height: 20px;
    padding-left: 10px;

    font-size: 14px;
    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    width: 200px;
    height: 16px;
    padding-left: 8px;

    font-size: 10px;
    border-radius: 6px;
  }
`;

export const Error = styled(ErrorMessage)`
  margin: 0;

  font-size: 14px;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;

export const Button = styled.button`
  height: 28px;

  font-size: 18px;
  text-transform: capitalize;  

  border: 1px solid currentColor;
  border-radius: 10px;
  color: inherit;
  background-color: inherit;
  
  &:hover,
  &:focus {
    background-color: #ff6b0a;
    border-color: #ff6b0a;
    color: #fff;
  }

  @media (max-width: 1023.98px) {
    height: 24px;

    font-size: 14px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    height: 20px;

    font-size: 10px;

    border-radius: 5px;
  }
`;

export const ErrorText = styled.div`
  margin: 0;

  font-size: 14px;
  color: red;

  @media (max-width: 1023.98px) {
    font-size: 12px;
  }

  @media (max-width: 767.98px) {
    font-size: 10px;
  }
`;
