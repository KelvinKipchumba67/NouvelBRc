import { useState } from 'react'
import './App.css'
import Showcase from './components/Showcase';
import navbar from './components/navbar';

function App() {
  return (
    <div className='container'>
      <navbar />
      <Showcase />
    </div>
  );
}

export default App
