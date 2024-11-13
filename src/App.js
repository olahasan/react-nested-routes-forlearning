import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Menu from './Components/Menu/Menu';
import Contact from './Components/Contact/Contact';

import Meals from './Components/Meals/Meals'
import Dessets from './Components/Dessets/Dessets'
import Healthy from './Components/Healthy/Healthy'
import Drinks from './Components/Drinks/Drinks'

import Veg from './Components/Veg/Veg'
import Vej from './Components/Vej/Vej'

import Up from './Components/Up/Up'

function App() {
  return (
    // <BrowserRouter>
      <div className="App" style={{height:"300vh"}}>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/About" element={ <About /> }/>
          <Route path="/Menu" element={ <Menu /> }/>
          <Route path="/Contact" element={ <Contact /> }/>

          <Route path="/Menu/Meals" element={ <Meals /> }/>
          <Route path="/Menu/Dessets" element={ <Dessets /> }/>
          <Route path="/Menu/Healthy" element={ <Healthy /> }/>
          <Route path="/Menu/Drinks" element={ <Drinks /> }/>

          <Route path='/Menu/Healthy/Veg' element={ <Veg /> }/>
          <Route path='/Menu/Healthy/Vej' element={ <Vej /> }/>
        </Routes>
        <Up />
      </div>
    // </BrowserRouter>
  );
}

export default App;
