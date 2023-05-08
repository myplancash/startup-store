import Home from './routes/home/Home';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Authentication from './routes/authentication/authentication';

function Shop() {
  return (
    <h1>Hello from show component</h1>
  )
}

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
