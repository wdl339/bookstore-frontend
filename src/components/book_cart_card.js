import { Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cart.css';

function BookCartCard ({book}) {
    return(
        <div className='cart-book-detail'>
            <Image
                alt = {book.title}
                src = {book.cover}
                width = {100}
            />
            <div>
                <Link to={`/book/${book.id}`}>
                    {book.title}
                </Link>
                <br></br>
                <p>{book.author}</p>
            </div>
        </div>
    );
};

export default BookCartCard;