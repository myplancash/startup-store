import { useContext } from 'react';
import {
  Nav,
  NavLink,
  LogoContainer,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './Navbar.styles';
import { Outlet } from 'react-router-dom';
import {ReactComponent as StoreLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

  
const Navbar = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  console.log(currentUser)

  const signOutHandler = async () => {
    await signOutUser()
    setCurrentUser(null)
  }

  return (
    <>
      <Nav>
        <LogoContainer to='/home'>
          <StoreLogo/>
        </LogoContainer>
        <NavMenu>
          <NavLink to='/shop' activestyle='true'>
            Shop
          </NavLink>
          <NavLink to='/events' activestyle='true'>
            Blog
          </NavLink>
          <NavLink to='/annual' activestyle='true'>
            Contact
          </NavLink>
          
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        { currentUser ? (
          <NavBtn>
          <NavBtnLink onClick={signOutHandler}>Sign Out</NavBtnLink>
        </NavBtn>
        ) : (
        <NavBtn>
          <NavBtnLink to='/auth'>Sign In</NavBtnLink>
        </NavBtn>
        )}
      </Nav>
      <Outlet />
    </>
  );
};
  
export default Navbar;