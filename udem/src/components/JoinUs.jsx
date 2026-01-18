import React, { useState } from "react";
import "./JoinUs.css"  

function JoinUS (){
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

    const handleSubmit = (e) => {
        e.preventDefault(); //stops page refresh
        //before backend since backend is not yet created
        console.log('Form Submitted:', formData);

        //this is where the axios call for the backend will go once ready
        };

    return <header className="joinus-page">
        <div className="signup-container">
            <div className="signup-card">
                <h2>Join Us</h2>
                <p className="subtitle">Join the community of readers</p>
                <form className="signup-form">
                    <div className="form-group">
                        <label htmlFor="username">Full name</label>
                        <input type="text" id="username" placeholder="Kelvin Darryl" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email"  placeholder="kelvin@exmaple.com"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" placeholder="" />
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