import React from 'react'
import Button from '../Button/Button';
import './CartDropdown.styles.scss';
import CartItem from '../CartItem/CartItem';

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      {[].map(item => (<CartItem key={item.id} cartItem={item} />))}
      <Button>GO TO CART</Button>
    </div>
  )
}

export default CartDropdown