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

  
const Navbar = () => {
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
        <NavBtn>
          <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      <Outlet />
    </>
  );
};
  
export default Navbar;