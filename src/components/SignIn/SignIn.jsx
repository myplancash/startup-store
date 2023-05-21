import {useState} from 'react';
import FormInput from '../FormInput/FormInput'
import { 
  signInAuthWithEmailAndPassword, 
  signInWithGooglePopup,  
} from '../../utils/firebase/firebase.utils'
import Button, { BUTTON_CLASSES } from '../Button/Button';

const SignIn = () => {

  const initialState = {
    email: '',
    password: '',
  }

  const [formFields, setFormFields] = useState(initialState)
  const { email, password } = formFields; 

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormFields({...formFields, [name]: value })
  }

  const resetFormFields = () => {
    setFormFields(initialState);
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await signInAuthWithEmailAndPassword(email, password) 
      resetFormFields();
    } catch(error) {
      switch(error.code) {
        case 'auth/wrong-password': 
          alert('incorrect password')
          break;
        case 'auth/user-not-found':
          alert('not user associated with this email')
          break;
        default: 
          console.log(error)
      }

     /*  const errorCode = error.code;
      const errorMessage = error.message;
      console.log('something went wrong', errorCode, errorMessage) */
    }
  }

  return (
    <div className='sign-in-container'>
      <h2>Log In</h2>
      <span>Sign In with your email and Password</span>
      <form onSubmit={handleSubmit} action="">
         <FormInput 
          label='Email:'
          type="email" 
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
         <FormInput
          label='Password:'
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <div className='buttons-container'>
         <Button type='submit'>Sign In</Button>
         <Button type='button' buttonClass={BUTTON_CLASSES.google} onClick={signInWithGoogle}>Sign In with Google</Button>
        </div>
      </form>
    </div>
  )
}

export default SignIn