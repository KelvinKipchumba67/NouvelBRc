import React from "react";
import "./JoinUS.css"  

function JoinUS (){
    return <header>
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
                    Already a Member? <a href="/login">Log in</a>
                </p>
            </div>
        </div>
    </header>
}

export default JoinUS;