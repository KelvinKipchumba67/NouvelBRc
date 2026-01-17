import React, { useState } from 'react';
import "./Contact.css";

function Contact (){
    const [result, setResult] = useState ("");

    const onSubmit = async (event) =>{
        event.preventDefault();//this prevents the page from refreshing 
        setResult("Sending....");

        setTimeout (() =>{
            setResult("Message sent successfully");
            event.target.reset();
        }, 2000);
    }
    return <header>
      <div className="contact-container">
      <div className="contact-card">
        
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>Have a question? Drop us a message.</p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" placeholder="Your Name" required/>
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" name="email" placeholder="you@example.com" required/>
          </div>

          <div className="form-group">
            <label>Message</label>
            <textarea name="message" rows="6" placeholder="How can we help?" required></textarea>
          </div>

          <button type="submit" className="submit-btn">Send Message</button>
          
          <p className="form-result">{result}</p>
        </form>

      </div>
    </div>
    </header>
};

export default Contact;
