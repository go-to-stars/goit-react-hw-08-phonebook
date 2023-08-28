import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/authSelectors';
import { logOut } from '../../redux/auth/authOperations';
import { MenuBox, Img, Button, User } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <MenuBox>
      <Img />
      <User>Welcome, {userName ? userName.name : 'User'}!</User>
      <Button onClick={handleLogOut}>Log out</Button>      
    </MenuBox>
  );
};
