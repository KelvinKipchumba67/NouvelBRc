import { useState } from 'react'
import './App.css'
import Showcase from './components/Showcase';
import Navbar from './components/navbar';
import JoinUS from './components/JoinUs';

function App() {
  return (
    <div>
      <Navbar />
      <Showcase />
      <JoinUS/>
    </div>
  );
}

export default App
