import React from "react";
import "./Showcase.css";
import logo from "../assets/images/react.svg";
import ShowcaseImage from "../assets/images/ShowcaseImage.jpg";
function Showcase(){
    return <header>
        <nav>
            <img src={logo} alt="logo" />
        </nav>
        <main>
            <div className="leftContent">
                <h2>Join the ultimate tech book club</h2>
                <p>Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations. Join vibrant discussions, and level up your skills in one chapter at a time.</p>
                <button>JOIN US</button>
            </div>

            <div className="rightContent">
                <img src={ShowcaseImage} alt="Showcase Image" />
            </div>
        </main>
    </header>
}

export default Showcase;