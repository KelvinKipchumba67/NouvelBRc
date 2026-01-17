import React, { useState } from 'react';
import "./About.css";

function About (){
    return <header>
        <div className="about-container">
      
      {/* SECTION 1: THE STORY (Split Screen) */}
      <div className="about-hero">
        <div className="about-image">
          <img src={aboutImage} alt="Our Community" />
        </div>
        <div className="about-text">
          <h1>Our Story</h1>
          <p className="subtitle">It started with a simple idea: Reading together, in silence.</p>
          <p>
            Nouvel Book Reading Club was born out of a desire to connect introverts who love books but hate
            the pressure of traditional book clubs. No assigned reading, no homework, and definitely
            no forced discussions.
          </p>
          <p>
            Just bring your own book, grab a drink, and enjoy the company of fellow book lovers
            in comfortable silence.
          </p>
        </div>
      </div>

      {/* SECTION 2: THE VALUES (3-Column Grid) */}
      <div className="values-section">
        <h2>Why Join Us?</h2>
        <div className="values-grid">
          
          <div className="value-card">
            <div className="icon">📚</div>
            <h3>No Homework</h3>
            <p>Read what you want. We never assign books, so you never fall behind.</p>
          </div>
          <div className="value-card">
            <div className="icon">🍷</div>
            <h3>Social & Silent</h3>
            <p>30 minutes of socializing, 1 hour of silent reading. The perfect balance.</p>
          </div>

        </div>
      </div>

    </div>
    </header>
};

export default About;