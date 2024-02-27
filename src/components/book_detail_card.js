import React from 'react';
import { Link } from 'react-router-dom';
;

function BookDetailCard ({book}) {
    return(
        <div className='book-detail'>
            <Link to={`/book/${book.id}`}>{book.title}</Link>
            <p>{book.description}</p>
        </div>
    );
};

export default BookDetailCard;