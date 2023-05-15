import {useContext} from 'react'
import Button from '../Button/Button';
import CartItem from '../CartItem/CartItem';
import { CartContext } from '../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import './CartDropdown.styles.scss';


const CartDropdown = () => {

  const {cartItems} = useContext(CartContext)
  const navigate = useNavigate()
  
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
        <Button onClick={() => navigate('/checkout')} buttonClass='inverted'>GO TO CHECKOUT</Button>      
      </div>
    </div>
  )
}

export default CartDropdown