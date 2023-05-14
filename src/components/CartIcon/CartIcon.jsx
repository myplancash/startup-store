import { useContext} from 'react'
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-bag.svg';
import { CartContext } from '../../contexts/cart.context';
import './CartIcon.styles.scss';

const CartIcon = () => {

  const {isCartOpen, setIsCartOpen} = useContext(CartContext)
  const {cartItems} = useContext(CartContext)

  const handleClick = () => {
    setIsCartOpen(!isCartOpen)
  }


  return (
    <div onClick={handleClick} className='cart-icon-container'>
      <ShoppingLogo className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon