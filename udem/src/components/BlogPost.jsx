import React from "react";
import { useParams, Link } from 'react-router-dom';
import './BlogPost.css';
import {blogPosts} from '../data/posts';//this is the blog posts

function BlogPost (){
    const { id } = useParams();//this gets the id from the url ie if url is /blog/1 id is 1
    const post = blogPosts.find((p) => p.id === parseInt(id));//this finds the specific post using the id assigned 
    //error handler incase user types the wrong url for the blogs
    if (!post) {
    return (
      <div className="blog-error">
        <h2>Post not found</h2>
        <Link to="/blog" className="back-btn">← Back to Blog</Link>
      </div>
    );
  }
    return <header>
      <div className="post-container">
      
      {/* Top Hero Image */}
      <div className="post-hero" style={{ backgroundImage: `url(${post.image})` }}>
        <div className="post-hero-overlay">
          <span className="post-category">{post.category}</span>
          <h1>{post.title}</h1>
          <div className="post-meta">
            <span>By {post.author}</span> • <span>{post.date}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="post-content">
        {/* We split the text by new lines so it creates real paragraphs */}
        {post.content.split('\n').map((paragraph, index) => (
           <p key={index}>{paragraph}</p>
        ))}
        
        <div className="post-footer">
           <Link to="/blog" className="back-btn">← Back to All Posts</Link>
        </div>
      </div>

    </div>
    </header>
};

export default BlogPost;