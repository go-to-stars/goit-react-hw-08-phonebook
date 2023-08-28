import { DarkModeSwitch } from 'react-toggle-dark-mode';
import styled from '@emotion/styled';
import { ReactComponent as Logo } from '../../img/phone_book.svg';

export const ContainerLayout = styled.div`
  padding: 0;
`;

export const LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  color: inherit;

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    gap: 10px;
  }

  @media (max-width: 767.98px) {
    gap: 5px;
  }
`;

export const Logotype = styled(Logo)`
  width: 50px;
  height: 50px;

  @media (max-width: 1023.98px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 767.98px) {
    width: 30px;
    height: 30px;
  }

  &:hover,
  &:focus {
    fill: #ff6b0a;
  }
`;

export const Logotext = styled.p`
  padding-top: 6px;

  font-family: 'Kalam';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  text-decoration: none;

  color: inherit;
  visibility: visible;

  @media (max-width: 1023.98px) {
    padding-top: 5px;

    font-size: 24px;
  }

  @media (max-width: 767.98px) {
    padding-top: 4px;

    font-size: 1px;
    visibility: hidden;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20vw;

  padding: 5px 0px;

  @media (max-width: 1023.98px) {
    padding: 3px 0px;
    gap: 15vw;
  }

  @media (max-width: 767.98px) {
    padding: 2px 0px;
    gap: 4vw;
  }

  &:active {
    text-decoration: underline;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 10vw;
  margin-left: 0vw;

  @media (max-width: 1439.98px) {
    margin-left: 0vw;
    gap: 12vw;

    &.contacts {
      margin-left: -10vw;
    }
  }

  @media (max-width: 1023.98px) {
    margin-left: 4vw;
    gap: 12vw;

    &.contacts {
      margin-left: -7vw;
    }
  }

  @media (max-width: 767.98px) {
    margin-left: 15vw;
    gap: 15vw;

    &.contacts {
      margin-left: 0vw;
    }
  }

  @media (max-width: 374.98px) {
    margin-left: 15vw;
    gap: 15vw;

    &.contacts {
      margin-left: -5vw;
    }
  }
`;

export const NavListItem = styled.li`
  font-size: 28px;
  text-transform: capitalize;
  color: inherit;

  border-radius: 16px;
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

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;

  box-shadow: var(--current-box-shadow-color);
  background-color: inherit;

  @media (max-width: 1023.98px) {
    padding: 0 10px;
  }

  @media (max-width: 767.98px) {
    padding: 0 5px;
  }
`;

export const Main = styled.main`
  min-height: calc(100vh - 70px - 48px);

  box-shadow: var(--current-box-shadow-color);

  @media (max-width: 1023.98px) {
    min-height: calc(100vh - 48px - 48px);
  }

  @media (max-width: 767.98px) {
    min-height: calc(100vh - 35px - 34px);
  }
`;

export const Footer = styled.footer`
  padding: 20px 0;

  font-size: 20px;
  text-align: center;
  color: inherit;

  box-shadow: var(--current-box-shadow-color);

  @media (max-width: 1023.98px) {
    padding: 15px 0;

    font-size: 16px;
  }

  @media (max-width: 767.98px) {
    padding: 10px 0;

    font-size: 12px;
  }
`;

export const ThemeIcon = styled(DarkModeSwitch)`
  width: 40px;
  height: 40px;
  color: currentColor;

  &:hover,
  &:focus {
    color: #ff6b0a;
  }

  @media (max-width: 1023.98px) {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 767.98px) {
    width: 20px;
    height: 20px;
  }
`;
