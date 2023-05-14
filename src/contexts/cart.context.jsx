import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false, 
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  totalAmount: 0,
  calculateTotal: () => {},
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

const total = (cartItems) => {
  const total = cartItems.reduce((acc, curr) => {
    const cost = acc.prsice * curr.quantity
    return cost;
  }, {})

  return total;
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount ] = useState(0)

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd))
  }

  const calculateTotal = (cartItems) => {
    setTotalAmount(total(cartItems))
  }
  
  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    cartItems, 
    addItemToCart,
    totalAmount,
    calculateTotal,
  }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}