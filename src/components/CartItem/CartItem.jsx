import React from 'react'

const CartItem = ({ cartItem }) => {
  const { name, quantity } = cartItem;

  return (
    <div className='cart-item-container'>
      <h2 className='cart-item'>{name}</h2>
      <span className='cart-quantity'>{quantity}</span>
    </div>
  )
}

export default CartItem