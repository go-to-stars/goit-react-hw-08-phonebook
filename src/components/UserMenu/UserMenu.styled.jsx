import styled from '@emotion/styled';
import { ReactComponent as DefaultPicture } from '../../img/avatar-human.svg';

export const MenuBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  @media (max-width: 1023.98px) {
    gap: 8px;
  }

  @media (max-width: 767.98px) {
    gap: 6px;
  }
`;

export const Button = styled.button`
  padding: 0;
  width: 120px;
  margin-left: 80px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 28px;
  line-height: calc(24 / 16);
  text-align: center;

  background-color: inherit;
  color: inherit;
  border: 1px solid currentColor;
  border-radius: 6px;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    width: 72px;
    margin-left: 30px;

    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    width: 52px;
    margin-left: 24px;

    font-size: 12px;
  }

  @media (max-width: 424.98px) {
    margin-left: 6px;
  }
`;

export const Img = styled(DefaultPicture)`
  width: 40px;
  height: 40px;

  fill: currentColor;

  @media (max-width: 1023.98px) {
    width: 32px;
    height: 32px;
  }

  @media (max-width: 767.98px) {
    width: 24px;
    height: 24px;
  } 
`;

export const User = styled.div`
  font-size: 28px;
  text-transform: capitalize;
  color: inherit;

  @media (max-width: 1023.98px) {
    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    font-size: 14px;
  }
`;

export const LogOut = styled.div`
  font-size: 28px;
  text-transform: capitalize;  
  color: inherit;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    font-size: 18px;
  }

  @media (max-width: 767.98px) {
    font-size: 14px;
  }
`;
