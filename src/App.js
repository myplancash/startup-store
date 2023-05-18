import Home from './routes/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Authentication from './routes/authentication/authentication';
import CategoriesPreview from './routes/categories-preview/categories-preview';
import Checkout from './routes/checkout/checkout';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index path='home' element={<Home />} />
        <Route path='shop/*' element={<CategoriesPreview />}/>
        <Route path='auth' element={<Authentication />}/>
        <Route path='checkout' element={<Checkout />}/>
      </Route>
    </Routes>  
  ); 
}

export default App;
