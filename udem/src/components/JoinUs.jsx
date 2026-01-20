import React, { useState } from "react";
import "./JoinUs.css" 
import { auth } from "../Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


function JoinUS (){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });//this holds the data a user types 
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        });
    };//this updates the state when the user types

    const handleSubmit =async  (e) => {
        e.preventDefault(); //stops page refresh
        //before backend since backend is not yet created
        console.log('Form Submitted:', formData);
        try {
        // ONE LINE OF CODE to create a secure user on Google's servers
        await createUserWithEmailAndPassword(auth, formData.email, formData.password);
        alert("Account created successfully");
        navigate('/');
    
        } catch (error) {
        alert(error.message); // e.g., "Password must be 6 characters"
        }

        //this is where the axios call for the backend will go once ready
        };

    return <header className="joinus-page">
        <div className="signup-container">
            <div className="signup-card">
                <h2>Join Us</h2>
                <p className="subtitle">Join the community of readers</p>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Full name</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Kelvin Darryl"
                            value={formData.username}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="kelvin@example.com"
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

                <button type="submit" className="submit-btn">Join Us</button>
                </form>

                <p className="footer-text">
                    Already a Member? <a href="/Login">Log in</a>
                </p>
            </div>
        </div>
    </header>
}

export default JoinUS;