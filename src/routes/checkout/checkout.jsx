import {useContext} from 'react'
import { CartContext } from '../../contexts/cart.context';
import './checkout.styles.scss';


const Checkout = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(CartContext)

  return (
    <div className='checkout-container'>
      <div className='checkout-header'>
        <div>Product</div>
        <div>Description</div>
        <div>Quality</div>
        <div>Price</div>
        <div>Remove</div>
      </div>
        {cartItems.map((cartItem) => {
          const {id, name, quantity} = cartItem;
           return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={()=> removeItemToCart(cartItem)}>drecrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
           ); 
        })}
      <span className='total'>$0</span>
    </div>
  )
}

export default Checkout;