import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: false, 
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
})


const addCartItem = (cartItems, productToAdd) => {
  //Find if cart items contains productToAdd
  const existingCardItem = cartItems.find((item) => item.id === productToAdd.id)

  //if found increment quantity
  if(existingCardItem) {
    return cartItems.map((item) => item.id === productToAdd.id ? {...item, quantity: item.quantity + 1} : item)
  }

  //return new array with modified cartItems, new cartitem
  return [...cartItems, {...productToAdd, quantity: 1}]
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState([])


  const addItemToCart = (productToAdd) => { 
    setCartItems(addCartItem(productToAdd))
  }
  
  const value = { isCartOpen, setIsCartOpen }
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}