import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);  
  z-index: 999;
`;

export const ModalWindow = styled.div`
  width: 420px;
  height: 300px;
  
  background-color: inherit;
  border: 1px solid currentColor;
  border-radius: 10px;

  @media (max-width: 1023.98px) {
    width: 340px;
    height: 250px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    width: 300px;
    height: 200px;

    border-radius: 6px;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 0;
  padding: 20px;  

  @media (max-width: 1023.98px) {
    padding: 16px;
  }

  @media (max-width: 767.98px) {
    padding: 12px;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 38px;
  width: 38px;

  background-color: transparent;
  border-radius: 10px;

  border: 1px solid currentColor;
  border-radius: 10px;
  color: inherit; 

  &:hover,
  &:focus {
    background-color: #ff6b0a;
    border-color: #ff6b0a;
    color: #fff;
  }

  @media (max-width: 1023.98px) {
    height: 34px;
    width: 34px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    height: 30px;
    width: 30px;

    border-radius: 5px;
  }
`;

export const Title = styled.h1`
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
  gap: 12px;  
  padding: 8px;

  border: 1px solid currentColor;
  border-radius: 10px;

  @media (max-width: 1023.98px) {
    gap: 10px;    
    padding: 6px;

    border-radius: 8px;
  }

  @media (max-width: 767.98px) {
    gap: 8px;    
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
    width: 250px;
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
