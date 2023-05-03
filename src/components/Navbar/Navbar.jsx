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
          <NavLink to='/shop' activeStyle>
            Shop
          </NavLink>
          <NavLink to='/events' activeStyle>
            Blog
          </NavLink>
          <NavLink to='/annual' activeStyle>
            Contact
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
      <Outlet />
    </>
  );
};
  
export default Navbar;