import Home from './routes/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Authentication from './routes/authentication/authentication';
import Shop from './routes/shop/Shop';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navbar />}>
        <Route index path='home' element={<Home />} />
        <Route path='shop' element={<Shop />}/>
        <Route path='auth' element={<Authentication />}/>
      </Route>
    </Routes>  
  ); 
}

export default App;
