import React from "react";
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer (){
    return <header>
      <footer className="footer-container">
      <div className="footer-content">
        
        {/* COLUMN 1: Brand & Tagline */}
        <div className="footer-section">
          <h2 className="footer-logo">EVENTHIVE</h2>
          <p className="footer-text">
            Connecting introverts through the quiet power of reading. 
            Join a chapter near you.
          </p>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About Us</Link></li>
            <li><Link to="/Pick">Our Picks</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>

        {/* COLUMN 3: Contact Info (From your original plan) */}
        <div className="footer-section">
          <h3>Contact</h3>
          <p>123 Library Lane, Booktown</p>
          <p>hello@eventhive.com</p>
          <p>+254 700 123 456</p>
          <div className="social-icons">

 
          </div>
        </div>

        {/* COLUMN 4: Legal / CTA */}
        <div className="footer-section">
          <h3>Join Us</h3>
          <p>Sign up for our newsletter to get monthly book recs.</p>
          <Link to="/JoinUs">
            <button className="footer-btn">Sign Up Now</button>
          </Link>
        </div>

      </div>

      {/* COPYRIGHT BAR */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} NOUVELBRc. All rights reserved.</p>
      </div>
    </footer>
    </header>
};

export default Footer;