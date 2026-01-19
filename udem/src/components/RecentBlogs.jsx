import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; // Reusing your existing Blog styles
import { blogPosts } from '../data/posts';

function RecentBlogs(){
    const latestPosts = blogPosts.slice(0, 3);//this only gets the first three recent blogs
    return <header>
      <div className="blog-container" style={{ minHeight: 'auto', background: 'white' }}>
      
      <div className="blog-header">
        <h1>Latest Updates</h1>
        <p>See what's happening in the club.</p>
      </div>

      <div className="blog-grid">
        {latestPosts.map((post) => (
          <article key={post.id} className="blog-card">
            
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>

            <div className="blog-content">
              <div className="blog-meta">
                <span className="date">{post.date}</span>
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

      {/* Button to see all posts */}
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/blog" className="nav-link-btn">View All Posts</Link>
      </div>

    </div>
    </header>
};

export default RecentBlogs;

