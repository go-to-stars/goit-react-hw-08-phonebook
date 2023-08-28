import styled from '@emotion/styled';

export const Text = styled.p`
  width: 350px;
  height: 28px;
  margin: 0;

  font-size: 18px;
  text-transform: capitalize;
  background-color: transparent;

  @media (max-width: 1023.98px) {
    width: 270px;
    height: 24px;

    font-size: 14px;
  }

  @media (max-width: 767.98px) {
    width: 176px;
    height: 20px;

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
