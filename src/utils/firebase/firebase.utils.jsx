import { initializeApp } from 'firebase/app';

import { 
  getAuth, 
  signInWithRedirect, 
  signInWithPopup, 
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider()


googleProvider.setCustomParameters({
  prompt: "select_account",
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {

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
        ...additionalInfo
      })
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('Cannot create email, email already in use')
      } else {
        console.log('error getting the user', error.message)
      }
    }
  }
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return
  await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => {
  await signOut(auth)
}

export const onAuthStateChangedListener = async (callback) => {
  await onAuthStateChanged(auth, callback)
}