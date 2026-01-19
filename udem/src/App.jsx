import { useState } from 'react'
import './App.css'
import Showcase from './components/Showcase';
import Navbar from './components/navbar';
import JoinUs from './components/JoinUs';
import Login from  './components/Login';
import Contact from './components/Contact';
import About from './components/About';
import Pick from './components/Pick';
import Blog from './components/Blog';
import { Routes, Route } from 'react-router-dom';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path ="/" element={<Showcase/>} />
        <Route path ="/JoinUs" element={<JoinUs/>} />
        <Route path ="/Login" element={<Login/>} />
        <Route path ="/Contact" element={<Contact/>} />        
        <Route path ="/Pick" element={<Pick/>} /> 
        <Route path= "/Blog" element={<Blog/>} /> 
        <Route path= "/Blog" element={<Blog/>} /> 
        <Route path= "/Blog" element={<Blog/>} /> 
        <Route path= "About" element={<About/>} />
        <Route path= "/Blog/:id" element={<BlogPost />} />

      </Routes>
      {/* <About />  */}
    </div>
  );
}

export default App
