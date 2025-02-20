
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home  from './pages/home.jsx';
import About from './pages/about.jsx';
import Navbar from './components/navbar.jsx';
import './App.css'
import { Newsletter } from './pages/newsletter.jsx';
import Detail from './components/detail.jsx';
import Error from './pages/error.jsx';




 export default function App() {
  const [items, setItems]=useState(null);
  const [isLoading , setIsLoading]= useState(false);
  
  return (
    <div>
      <Navbar  />
      
      <Routes>
        <Route path="/" element={<Home items={items} setItems={setItems} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/home" element={<Home items={items} setItems={setItems} isLoading={isLoading} setIsLoading={setIsLoading}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/Detail/:id" element={<Detail items={items} />}/>
        <Route path='/*' element={<Error />}/>
      </Routes>
      </div>
    
  );
}

