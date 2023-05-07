import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignUp from '../../components/SignUp/SignUp';

const SignIn = () => {

  /* useEffect(() => {
   const response = await getRedirectResult(auth)
   if(response) {
    const userDocRef = await createUserDocumentFromAuth(response.user);
   }
  }, [])
 */
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h2>Sign In with Google</h2>
      <button onClick={logGoogleUser}>
        Sign In with Google
      </button>
      <SignUp />
    </div>
  )
}

export default SignIn