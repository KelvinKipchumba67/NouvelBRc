import { useState } from 'react'
import './Pick.css';

//mock books to use for the picks list
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=400",
    category: "Fiction"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=400",
    category: "Self-Help"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    author: "Andy Weir",
    image: "https://images.unsplash.com/photo-1614544048536-0d28caf77f41?auto=format&fit=crop&q=80&w=400",
    category: "Sci-Fi"
  },
  {
    id: 4,
    title: "Dune",
    author: "Frank Herbert",
    image: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=400",
    category: "Sci-Fi"
  },
  {
    id: 5,
    title: "Educated",
    author: "Tara Westover",
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=400",
    category: "Memoir"
  },
  {
    id: 6,
    title: "The Alchemist",
    author: "Paulo Coelho",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=400",
    category: "Fiction"
  }
];

function Pick (){
    return <header>
        <div className="picks-container">
      
      {/* Header Section */}
      <div className="picks-header">
        <h1>Our Monthly Picks</h1>
        <p>Curated reads chosen by our community members.</p>
      </div>

      {/* The Grid */}
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            
            <div className="card-image">
              <img src={book.image} alt={book.title} />
              <span className="category-tag">{book.category}</span>
            </div>
            
            <div className="card-content">
              <h3>{book.title}</h3>
              <p className="author">by {book.author}</p>
              <button className="view-btn">View Details</button>
            </div>

          </div>
        ))}
      </div>
      
    </div>
    </header>
};

export default Pick;