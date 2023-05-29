import Home from './routes/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';
import Contact from './routes/contact/contact';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from './utils/firebase/firebase.utils';

import { setCurrentUser } from './store/user/user.actions';



const contactDetails = {
  name: 'Clothing Store',
  email: 'sergio.smiling@gmail.com',
  address: '123 Main Street, City, State, ZIP Code',
  phone: '+1 (555) 123-4567',
  hours: 'Monday to Friday: 9:00 AM to 5:00 PM, Saturday and Sunday: Closed'
}

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);



  return (
    <Routes>
      <Route element={<Navbar />}>
        <Route index path='/' element={<Home />} />
        <Route path='shop/*' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
        <Route path='contact' element={<Contact contactDetails={contactDetails} />}/>
      </Route>
    </Routes>  
  ); 
}

export default App;
