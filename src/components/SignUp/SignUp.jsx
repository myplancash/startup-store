import {useState, useContext} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import FormInput from '../FormInput/FormInput'
import Button from '../Button/Button';
import './SignUp.styles.scss';
import { UserContext } from '../../contexts/user.context';

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

const SignUp = () => {

  const [formFields, setFormFields] = useState(initialState)
  const { displayName, email, password, confirmPassword} = formFields;
  const { setCurrentUser } = useContext(UserContext)

  const handleChange = (e) => {
    const { value, name } = e.target
    setFormFields({...formFields, [name]: value })
    console.log(formFields)
  }

  const resetFormFields = () => {
    setFormFields(initialState)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword) {
      alert('the passwords do not match')
      return
    }
    try {
      const {user} = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })
      setCurrentUser(user)
      
      resetFormFields()
    } catch(error) {
      if(error.code === 'auth/email-already-in-use') {
        alert('cannot create user, email already in use')
      } else {
        console.log('user creation encountered an error', error);
      }
    }
    
  }

  return (
    <div className='sign-up-container'>
      <h2>Don't have an Account?</h2>
      <span>Sign Up with your email and Password</span>
      <form onSubmit={handleSubmit} action="">
        <FormInput 
          label='Display Name:'
          type="text" 
          //Short-circuit evaluation displayName || ''
          value={displayName}
          name="displayName"
          onChange={handleChange}
          required
        />

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
         <FormInput
          label='Confirm Password:'
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          required
        />
        <Button buttonClass='google' type='submit'>Submit form</Button>
      </form>
    </div>
  )
}

export default SignUp;