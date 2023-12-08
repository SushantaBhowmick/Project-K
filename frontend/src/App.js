import React, { useEffect, useState } from 'react';
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
import axios from 'axios';



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

  
  const [weatherDetails, setWeatherDetails] = useState(null);

  const [place, setPlace] = useState(" ");

  let weather = {
      apiKey: "0bff6234f35d3b5aef48e0dd8d8d27b9",
      fetchWeather: function (city) {
          fetch(
              "https://api.openweathermap.org/data/2.5/weather?q=" +
              city +
              "&units=metric&appid=" +
              this.apiKey
          )
              .then((response) => {
                  if (!response.ok) {
                      alert("No weather found.");
                      throw new Error("No weather found.");
                  }
                  return response.json();
              })
              .then((data) => {
                  this.displayWeather(data)
              })
              .catch((err) => {
                  console.log(err);
              });
      },
      displayWeather: function (data) {
          const { name } = data;
          const { icon, description } = data.weather[0];
          const { temp, humidity } = data.main;
          const { speed } = data.wind;
          setWeatherDetails(() => ({
              city: name,
              temp: temp + "°C",
              icon: "https://openweathermap.org/img/wn/" + icon + ".png",
              description: description,
              humidity: humidity + "%",
              wind: speed + " km/h",
          }))
      },
      search: function () {
        this.fetchWeather(place);
    },
};

useEffect(() => {
    axios.get("https://ipapi.co/json")
        .then((response) => {
            console.log(response);
            setPlace(response.data.city)
            weather.fetchWeather(response.data.city);
        })
        .catch((error) => console.log(error));
})


  return (
    <Router>
      <Routes>
      <Route path='/' element={<Layout />}>
          <Route path='' element={<Home  weatherDetails={weatherDetails} 
          setWeatherDetails={setWeatherDetails}/>} />
          <Route path='products' element={<Product />} />
          <Route path='cart' element={<Cart 
         
          />} />
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
