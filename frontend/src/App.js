import React from 'react';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='products' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='orders' element={<Order />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
