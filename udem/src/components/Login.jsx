import React, { useState } from "react";
import "./Login.css"  
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth"; // Different function for Login
import { auth } from '../Firebase';


function Login () {
//a mini db to hold what the user is typing.
const [formData, setFormData] =useState({
    email: '',
    password: ''
});

const navigate = useNavigate();
//this function handles the typing for the email and password
const handleChange = (e) =>{
    setFormData ({
    ...formData, //copy existing data 
    [e.target.id]: e.target.value //update only the field currently typed in.
    });

};

const handleSubmit = async (e) =>{
    e.preventDefault(); //stops the browser from refreshing the page
    try {
      // FIREBASE LOGIN COMMAND:
      await signInWithEmailAndPassword(auth, formData.email, formData.password);
      
      alert("Login Successful!");
      navigate('/'); // Redirect to Home
      
    } catch (error) {
      console.error('Firebase login error:', error);
      if (error?.code === 'auth/network-request-failed') {
        alert('Network error while contacting Firebase. Check your internet, VPN/proxy, firewall, or ad-blocker and retry.');
      } else if (error?.code === 'auth/invalid-credential' || error?.code === 'auth/wrong-password' || error?.code === 'auth/user-not-found') {
        alert('Invalid email or password.');
      } else {
        alert(error?.message ?? 'Login failed.');
      }
    }
    console.log('Login Submitted:', formData);

};

return <header className="login-page">
    <main>
    <div className="signup-container"> {/* Reusing container class */}
      <div className="signup-card">    {/* Reusing card class */}
        
        <h2>Welcome Back</h2>
        <p className="subtitle">Login to access your account</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input 
              type="email" 
              id="email" 
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required 
            />
          </div>

          <button type="submit" className="submit-btn">Log In</button>
        </form>

        <p className="footer-text">
          Don't have an account? <a href="/JoinUs">Sign Up</a>
        </p>
        
      </div>
    </div>
    </main>
</header>
}
export default Login;