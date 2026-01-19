import React from "react";
import RecentBlogs from './RecentBlogs';
import About from './About';
import Showcase from './Showcase';


function Home (){
    return <header>
     <div className="home-page-container">
      <Showcase />
      <RecentBlogs />
      <About/>
      {/* You can add <Pricing /> or <Newsletter /> here later */}
    </div>
    </header>
};

export default Home;