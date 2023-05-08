import SignUp from '../../components/SignUp/SignUp';
import SignIn from '../../components/SignIn/SignIn';
import './authentication.styles.scss';

const Authentication = () => {

  /* useEffect(() => {
   const response = await getRedirectResult(auth)
   if(response) {
    const userDocRef = await createUserDocumentFromAuth(response.user);
   }
  }, [])
 */
  return (
    <div className='authentication-container'>
      <SignIn />
      <SignUp />
    </div>
  )
}

export default Authentication;