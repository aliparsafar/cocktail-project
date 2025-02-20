
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';
import Home  from './pages/home.jsx';
import About from './pages/about.jsx';
import Navbar from './components/navbar.jsx';
import './App.css'
import { Newsletter } from './pages/newsletter.jsx';
import Detail from './components/detail.jsx';




 export default function App() {
  const [items, setItems]=useState([])
  return (
    <div>
      <Navbar  />
      
      <Routes>
        <Route path="/" element={<Home items={items} setItems={setItems} />} />
        <Route path="/home" element={<Home items={items} setItems={setItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/Detail/:id" element={<Detail items={items} />}/>
      </Routes>
      </div>
    
  );
}

