import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { toggleTheme } from '../../redux/theme/themeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../redux/theme/themeSelector';
import { useAuth } from '../../hooks/useAuth';
import {
  Nav,
  LogoBox,
  Logotype,
  Logotext,
  NavList,
  NavListItem,
  ContainerLayout,
  Header,
  Main,
  Footer,
  ThemeIcon,
} from './Layout.styled';

let isDarkMode = false;

function themeStyle(theme) {
  if (theme === 'light') {
    document.body.classList.remove('dark');
    document.body.style.setProperty(
      '--current-box-shadow-color',
      'var(--light-box-shadow-color)'
    );
    isDarkMode = false;
  } else {
    document.body.classList.add('dark');
    document.body.style.setProperty(
      '--current-box-shadow-color',
      'var(--dark-box-shadow-color)'
    );
    isDarkMode = true;
  }
}

const Layout = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();

  const theme = useSelector(selectTheme); // виклик хука useSelector дозволяє витягувати дані зі стану сховища Redux за допомогою функції селектора selectContacts
  themeStyle(theme);

  const toggleDarkMode = checked => {
    dispatch(toggleTheme());
  };

  return (
    <ContainerLayout>
      <Header>
        <Nav>
          <NavLink to="" className={'link'}>
            <LogoBox>
              <Logotype />
              <Logotext>Phonebook</Logotext>
            </LogoBox>
          </NavLink>
          {isLoggedIn ? (
            <>
              <NavList className={'contacts'}>
                <NavListItem>
                  <NavLink to="/contacts" className={'link'}>
                    Contacts
                  </NavLink>
                </NavListItem>
              </NavList>              
            </>
          ) : (
            <>
              <NavList>
                <NavListItem>
                  <NavLink to="/register" className={'link'}>
                    Register
                  </NavLink>
                </NavListItem>
                <NavListItem>
                  <NavLink to="/login" className={'link'}>
                    Sign In
                  </NavLink>
                </NavListItem>
              </NavList>
            </>
          )}
        </Nav>
        {isLoggedIn && <UserMenu />}
        <ThemeIcon
          checked={isDarkMode}
          onChange={toggleDarkMode}
          sunColor={'currentColor'}
          moonColor={'currentColor'}
        />
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer>Copyright IvS © 2023. All rights reserved.</Footer>
    </ContainerLayout>
  );
}; // функція Layout повертає для рендеру розмітку на головну сторінку основне тіло сайту (хедер з навігацією по сторінкам, мейн та футер). Весь інший контент рендериться в Outlet

export default Layout; // дефолтний експорт функції Layout
