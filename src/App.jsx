import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home'; 
import CategoryProducts from './Components/MyProjects/AlphaFood/Category-product/CategoryProducts';
import HeadAlpha from './Components/MyProjects/AlphaFood/head-alpha/HeadAlpha';
import FootAlpha from './Components/MyProjects/AlphaFood/foot-alpha/FootAlpha';
import AddRestroAlpha from './Components/MyProjects/AlphaFood/AddRestro-alpha/AddRestroAlpha';
import CartAdd from './Components/MyProjects/AlphaFood/Cart-alpha/CartAdd';
import LoginAlpha from './Components/Login-alpha/LoginAlpha';
import RegisterAlpha from './Components/RegisterAlpha/RegisterAlpha'
const App = () => {
  return (
    <>
    <Router>
    <HeadAlpha/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LoginAlpha" element={<LoginAlpha />} />
        <Route path="/RegisterAlpha" element={<RegisterAlpha/>}/>
        <Route path='/CategoryProducts' element={<CategoryProducts/>} />
        <Route path='/AddRestroAlpha' element={<AddRestroAlpha/>} />
        <Route path='/CartAdd' element={<CartAdd/>} />
      </Routes>
    <FootAlpha/>
    </Router>
    </>
  );
};

export default App;
