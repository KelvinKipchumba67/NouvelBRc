import { Link, useParams } from 'react-router-dom';
import { books } from '../data/book';
import './BookDetail.css';

function BookDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <p>Book not found</p>
        <Link to="/Pick" className="back-link">
          ← Back to List
        </Link>
      </div>
    );
  }

  return (
    <div className="book-detail-container">
      <div className="book-detail-card">
        <div className="detail-image">
          <img src={book.image} alt={book.title} />
        </div>

        <div className="detail-content">
          <span className="detail-category">{book.category}</span>
          <h1>{book.title}</h1>
          <h3 className="detail-author">by {book.author}</h3>

          <div className="detail-stats">
            <span>{book.rating}</span>
            <span>•</span>
            <span>{book.pages} pages</span>
          </div>

          <p className="detail-synopsis">{book.synopsis}</p>

          <div className="action-buttons">
            <Link to="/Pick" className="back-link">
              ← Back to List
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;