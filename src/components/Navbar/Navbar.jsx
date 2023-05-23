import { useContext } from 'react';
import {
  NavContainer,
  NavLink,
  LogoContainer,
  NavMenu,
  Authentication
} from './Navbar.styles';
import { Outlet } from 'react-router-dom';
import {ReactComponent as StoreLogo } from '../../assets/crown.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import { CartContext }from '../../contexts/cart.context';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';
  
const Navbar = () => {
  const { currentUser } = useContext(UserContext)
  const { isCartOpen } = useContext(CartContext)
  /* const signOutHandler = async () => {
    // onAuthStateChangedListener is going to catch it, so we do not need to: setCurrentUser(null)
    await signOutUser()
   }*/

  return (
    <>
      <NavContainer>
        <LogoContainer to='/'>
          <StoreLogo/>
        </LogoContainer>
        <NavMenu>
          <NavLink to='/shop' activestyle='true'>
            Shop
          </NavLink>
          <NavLink to='/events' activestyle='true'>
            Blog
          </NavLink>
          <NavLink to='/contact' activestyle='true'>
            Contact
          </NavLink>
          <Authentication>
          { currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign Out
            </NavLink>
          ) : (
            <NavLink to='/auth'>
              Sign In
            </NavLink>
          )}
          </Authentication>
          <CartIcon />
        </NavMenu>
        { isCartOpen && <CartDropdown />}
      </NavContainer>
      <Outlet />
    </>
  );
};
  
export default Navbar;