import {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {

 const {addItemToCart, removeItemToCart, clearItemFromCart} = useContext(CartContext)

 const removeItemHandler = () => {
  return removeItemToCart(cartItem)
 }

 const addItemHandler = () => {
   return addItemToCart(cartItem)
 }

 const clearItemHandler = () => {
  return clearItemFromCart(cartItem)
 }

  const  {name, price, imageUrl, quantity } = cartItem
  return (
    <div className='checkout-item-container'>
      <div className='image-container'>
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <span className='arrow' onClick={removeItemHandler}>&lt;</span>
        {quantity}
        <span className='arrow' onClick={addItemHandler}>&gt;</span>
      </span>
      <span className='price'>${price * quantity}</span>
      <span onClick={clearItemHandler} className='remove-button'>&#10005;</span>
    </div>
  )
}

export default CheckoutItem;