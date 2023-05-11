import React from 'react'
import { ReactComponent as ShoppingLogo } from '../../assets/shopping-bag.svg';
import './CartIcon.styles.scss';

const CartIcon = () => {
  return (
    <div className='cart-icon-container'>
      <ShoppingLogo className='shopping-icon' />
      <span className='item-count'>0</span>
    </div>
  )
}

export default CartIcon