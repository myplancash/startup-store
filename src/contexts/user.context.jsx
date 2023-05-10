import { createContext, useState, useEffect } from 'react'
import { onAuthStateChangedListener, createUserDocumentFromAuth } from '../utils/firebase/firebase.utils';


export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
})

export const UserProvider = ({children}) => {
  const [currentState, setCurrentState] = useState(null)
  const value = {currentState, setCurrentState};

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if(user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentState(user)
    })
    return () => unsubscribe
  }, [])


  return <UserContext.Provider value={value}>
    {children}
  </UserContext.Provider> 
}