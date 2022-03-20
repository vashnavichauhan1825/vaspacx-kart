import React from 'react';
import './App.css';
import { BrowserRouter, Routes , Route  } from 'react-router-dom';
import Home from './pages/Home';
import NavCont from './components/navbar';
import { ProductPage} from './pages/ProductPage';
import Cart from './pages/Cart';
import Footer from './components/footer/Footer';

function App() {
  return (
 <BrowserRouter>
  <NavCont/>
  <div>
  <Routes>
  <Route path='/' exact element={<Home />}/>
  <Route path='/products' exact element={<ProductPage />}/>
  <Route path='/cart' exact element={<Cart />}/>
  </Routes>
  </div>
 
 </BrowserRouter>
  );
}

export default App;
