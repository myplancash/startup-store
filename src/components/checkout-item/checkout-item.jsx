import {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import {CheckoutItemContainer, CheckoutItemDetails, ImageContainer, Name, Quantity, Price, RemoveButton} from './checkout-item.styles.jsx';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <CheckoutItemDetails>
        <Name>{name}</Name>
        <Quantity>
         <span className='arrow' onClick={removeItemHandler}>&lt;</span>
          {quantity}
          <span className='arrow' onClick={addItemHandler}>&gt;</span>
        </Quantity>
        <Price>${price * quantity}</Price>
        <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
      </CheckoutItemDetails>
    </CheckoutItemContainer>
  )
}

export default CheckoutItem;