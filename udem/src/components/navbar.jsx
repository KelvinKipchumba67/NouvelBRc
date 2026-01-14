import { useState } from "react";
import "./navbar.css";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);  //this is a react hook, menuOpen holds the current state of the menu, setMenuOpen is function used to update that state,useState intializes state as false by default.

    return (
        <header className="site-header">
            <nav className="navbar">
                <div className="container navbar-inner">
                    <a className="navbar-logo" href="/">NOUVEL BRc</a>
                    <button
                        type="button"
                        className="menu-toggle"
                        aria-label="Toggle navigation menu"//this tells screen readers what the button does
                        aria-expanded={menuOpen}//tells screen readers if the menu is currently closed or open based on state variable.
                        onClick={() => setMenuOpen((open) => !open)}//the event handler
                    >
                        ☰
                    </button>
                    <ul className={`nav-links ${menuOpen ? "active" : ""}`.trim()}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/picks">Our Picks</a></li>
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/join" className="join-btn">Join Us</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;