import { initializeApp } from 'firebase/app';

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider
} from 'firebase/auth'

import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
 
const firebaseConfig = {
  apiKey: "AIzaSyDgy7QE9KqGRpFfWC7ZjHhn2sfTsTwN6dE",
  authDomain: "startup-store-db.firebaseapp.com",
  projectId: "startup-store-db",
  storageBucket: "startup-store-db.appspot.com",
  messagingSenderId: "856259369980",
  appId: "1:856259369980:web:5986bad1f24226ef6ab079"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()


provider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {

  const userDocRef = doc(db, 'users', userAuth.uid) 
  const userSnapshot = await getDoc(userDocRef)

  console.log(userSnapshot)
  console.log(userSnapshot.exists())
  

  if(!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      })
    } catch(error) {
      console.log('error getting the user', error.message)
    }
  }
  return userDocRef;
}