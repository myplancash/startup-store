import { createContext, useState, useEffect, useReducer } from 'react';

import {createAction} from '../utils/reducer/reducer.utils'

export const CartContext = createContext({
  isCartOpen: false, 
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  removeCartItems: () => {},
  clearItemFromCart: () => {},
  cartTotal: 0,
})

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItems = cartItems.find(cartItem => cartItem.id === productToAdd.id)

  if(existingCartItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1} 
      : cartItem
    )
  }
  return [...cartItems, {...productToAdd, quantity: 1}]
}


const removeCartItems = (cartItems, cartItemToRemove) => {
  //find the cart Item to remove
  const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

  //check if quantity is equal to 1, if it is remove the item
  if(existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id) 
  }
  //return back cartItems with matching cart item with reduced quantity
  return cartItems.map((cartItem) => cartItem.id === cartItemToRemove.id 
  ?  { ...cartItem, quantity: cartItem.quantity - 1} 
  : cartItem)
}

const clearCartItem = (cartItems, cartItemToClear) => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id)

/* export const CART_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
} */

export const initialState = {
  isCartOpen: false,  
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
}

export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPENS'
}

export const cartReducer = (state, action) => {
  const { type, payload} = action

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload // 3 values are updated
      }
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      }   
    default:
      throw new Error(`unhandled type: ${type} from cartReducer`)
  }
}

export const CartProvider = ({ children }) => {

  const [{isCartOpen, cartItems, cartCount, cartTotal}, dispatch] = useReducer(cartReducer, initialState);
/* 
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [cartCount, setCartCount ] = useState(0)
  const [cartTotal, setCartTotal ] = useState(0)

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => {
      console.log(total);
      return total + cartItem.quantity
    }, 0)
    setCartCount(newCartCount)
  }, [cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => {
      return total + (cartItem.quantity * cartItem.price);
    }, 0)
    setCartTotal(newCartTotal)
  }, [cartItems]) */
  
  const updateCartItemsReducer = (newCartItems) => {
    const newCartCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)

    const newCartTotal = newCartItems.reduce((total, cartItem) =>
    total + (cartItem.quantity * cartItem.price), 0)

    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems, 
        cartTotal: newCartTotal,
        cartCount: newCartCount, 
      })
    )
  }

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd)
    updateCartItemsReducer(newCartItems)
  }

  const removeItemToCart = (cartItemToRemove) => {
    const newCartItems = removeCartItems(cartItems, cartItemToRemove)
    updateCartItemsReducer(newCartItems)
  }

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear)
    updateCartItemsReducer(newCartItems)
  }

  const setIsCartOpen = (bool) => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool))
  }

  
  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartItems, 
    cartCount,
    cartTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}