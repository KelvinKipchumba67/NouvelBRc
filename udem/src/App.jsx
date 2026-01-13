import { useState } from 'react'
import './App.css'
import Showcase from './components/Showcase';
import Navbar from './components/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
    </div>
  );
}

export default App
