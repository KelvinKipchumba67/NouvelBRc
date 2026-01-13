import "./Showcase.css";
import ShowcaseImage from "../assets/images/ShowcaseImage.jpg";
function Showcase(){
    return <header>
        {/* <nav>
            <img className="logo"    src={logo} alt="logo" />
        </nav> */}
        <main className="showcase">
            <div className="leftContent">
                <div className="content-wrapper">
                    <h2>Join the ultimate tech book club</h2>
                    <p>Turn your reading time into learning time with fellow tech enthusiasts. Get curated recommendations. Join vibrant discussions, and level up your skills in one chapter at a time.</p>
                    <a href="/join"  className="cta-button">JOIN US</a>
                </div>
            </div>

            <div className="rightContent">
                <img className="image"     src={ShowcaseImage} alt="Showcase Image" />
            </div>
        </main>
    </header>
}

export default Showcase;