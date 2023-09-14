import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Cart from './components/Cart/Cart';
import Order from './components/Order/Order';
import Profile from './components/Profile/Profile';
import Login from './components/Auth/Login';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast'
import { loadUser } from './redux/actions/userAction';
import {ProtectedRoute} from 'protected-route-react'



function App() {

  const { isAuthenticated, error, message, user } = useSelector(state => state.user)
  const dispatch = useDispatch()
  

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({type:"clearError"})
    }
    if (message) {
      toast.success(message);
      dispatch({type:"clearMessage"})

    }
  }, [dispatch, error, message])

  useEffect(()=>{
    dispatch(loadUser())
  },[dispatch])

  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='products' element={<Product />} />
          <Route path='cart' element={<Cart />} />
          <Route path='orders' element={<Order />} />
          <Route path='login' element={
          <ProtectedRoute isAuthenticated={!isAuthenticated} redirect='/profile'>
            <Login />
          </ProtectedRoute>} />
          <Route path='profile' element={
          <ProtectedRoute isAuthenticated={isAuthenticated} >
            <Profile user={user} />
          </ProtectedRoute>} />
        </Route>
      </Routes>
      <Toaster
        position='top-right'
      />
    </Router>
  );
}

export default App;
