import React from 'react';
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar'
import Login from './Login';
import Footer from './Footer';


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;