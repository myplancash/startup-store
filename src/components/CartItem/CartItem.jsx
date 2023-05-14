import { useContext } from 'react'
import './CartItem.scss';
import { CartContext } from '../../contexts/cart.context';

const CartItem = ({ cartItem }) => {
  const { name, imageUrl } = cartItem;
  const {totalAmount} = useContext(CartContext)
  
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <h2 className='name'>{name}</h2>
        <span className='quantity'>{totalAmount}</span>
      </div>
    </div>
  )
}

export default CartItem