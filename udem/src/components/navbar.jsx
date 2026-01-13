import React from "react";
import "./navbar.css";
import logo from "../assets/images/logo.png";
function navbar(){
    return <header>
        <main>
            <nav className="navbar">
                <div className="logo">NOUVEL BRc</div>
                <ul className="nav-links">
                    <li> <a href="/">Home</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/picks">Our Picks</a></li>
                    <li><a href="/about">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                    <li><a href="/join"className="join-btn">Join Us</a></li>
                </ul>
            </nav>
        </main>
    </header>
}

export default navbar;