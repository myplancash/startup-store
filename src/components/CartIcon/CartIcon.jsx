import { useContext} from 'react'
import { CartContext } from '../../contexts/cart.context';
import {CartIconContainer, ShoppingIcon, ItemCount} from './CartIcon.styles.jsx';

const CartIcon = () => {

  const {isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)

  const handleClick = () => {
    setIsCartOpen(!isCartOpen)
  }

  return (
    <CartIconContainer onClick={handleClick}>
      <ShoppingIcon/>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  )
}

export default CartIcon