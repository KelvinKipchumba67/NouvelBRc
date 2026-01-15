import { useState } from 'react'
import './App.css'
import Showcase from './components/Showcase';
import Navbar from './components/navbar';
import JoinUs from './components/JoinUs';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Showcase/>} />
        <Route path ="/JoinUs" element={<JoinUs/>} />
      </Routes>
        
    </div>
  );
}

export default App
