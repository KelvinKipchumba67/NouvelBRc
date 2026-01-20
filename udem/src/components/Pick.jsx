import './Pick.css';
import { Link } from 'react-router-dom';
import diaryofaceo from '../assets/images/diaryofaceo.webp';
import psychologyofmoney from '../assets/images/psychologyofmoney.jpg';
import midnightlibrary from '../assets/images/midnightlibrary.jpg';
import atomichabits from '../assets/images/atomichabits.jpg';
import hailmary from '../assets/images/hailmary.jpg';
import dune from '../assets/images/dune.jpg';
import candycanemurder from '../assets/images/candycanemurder.jpg';
import alchemist from '../assets/images/alchemist.jpg';
//mock books to use for the picks list
const books = [
  {
    id: 1,
    title: "The Midnight Library",
    month: "January 26",
    image: midnightlibrary,
    category: "Fiction"
  },
  {
    id: 2,
    title: "Atomic Habits",
    month: "December 25",
    image: atomichabits,
    category: "Self-Help"
  },
  {
    id: 3,
    title: "Project Hail Mary",
    month: "November 25",
    image: hailmary,
    category: "Sci-Fi"
  },
  {
    id: 4,
    title: "Dune",
    month: "October 25",
    image: dune,
    category: "Sci-Fi"
  },
  {
    id: 5,
    title: "Candy Cane Murder",
    month: "September 25",
    image: candycanemurder,
    category: "Fiction"
  },
  {
    id: 6,
    title: "The Alchemist",
    month: "August 25",
    image: alchemist,
    category: "Fiction"
  },
  {
    id:7,
    title: "The Diary of A CEO",
    month:"July 25",
    image: diaryofaceo,
    category:"Self Help"
  },
   {
    id:8,
    title: "The Psycholoy of money",
    month:"June 25",
    image: psychologyofmoney,
    category:"Self Help"
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
              <p className="author"> {book.month}</p>
             <Link to={`/Pick/${book.id}`}>
             
             <button className="view-btn">View Details</button>
             </Link>
            </div>

          </div>
        ))}
      </div>
      
    </div>
    </header>
};

export default Pick;