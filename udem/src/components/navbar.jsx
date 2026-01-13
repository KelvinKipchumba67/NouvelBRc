import { useState } from "react";
import "./navbar.css";

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <nav className="navbar">
                <div className="container navbar-inner">
                    <a className="navbar-logo" href="/">NOUVEL BRc</a>
                    <button
                        type="button"
                        className="menu-toggle"
                        aria-label="Toggle navigation menu"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen((open) => !open)}
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