import React, { useState } from "react";
import "./Login.css"  


function Login () {
//a mini db to hold what the user is typing.
const [formData, setFormData] =useState({
    email: '',
    password: ''
});
//this function handles the typing for the email and password
const handleChange = (e) =>{
    setFormData ({
    ...formData, //copy existing data 
    [e.target.id]: e.target.value //update only the field currently typed in.
    });

};

const handleSubmit = (e) =>{
    e.preventDefault(); //stops the browser from refreshing the page
    console.log('Login Submitted:', formData);

};

return <header>
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
          Don't have an account? <a href="/JoinUS">Sign Up</a>
        </p>
        
      </div>
    </div>
    </main>
</header>
}
export default Login;