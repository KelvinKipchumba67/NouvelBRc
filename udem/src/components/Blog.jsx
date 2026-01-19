import React from "react";

import './Blog.css';
import readingspot from '../assets/images/readingspot.jpg';
import { blogPosts } from "../data/posts";
import { Link } from 'react-router-dom';


function Blog (){
    return <header>
      <div className="blog-container">
      <div className="blog-header">
        <h1>The Reading Room</h1>
        <p>News, interviews, and deep dives from the NOUVELBRc community.</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card"> 
            
            {/* Image Section */}
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>

            {/* Content Section */}
            <div className="blog-content">
              <div className="blog-meta">
                <span className="date">{post.date}</span>
                <span className="author">By {post.author}</span>
              </div>
              
              <h2>{post.title}</h2>
              <p className="excerpt">{post.excerpt}</p>
              
              <Link to={`/blog/${post.id}`} className="read-more-btn">
                Read Article →
              </Link>
            </div>

          </article>
        ))}
      </div>
    </div>
    </header>
};

export default Blog;