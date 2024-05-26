import { Divider, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/cart.css';

function BookOrderCardList ({items}) {
    return(
        <div>
            {items.map((item, index) => (
                <>
                    {index === 0 ? null : <Divider/>}
                    <BookOrderCard key={index} item={item}/>
                </>
            ))}
        </div>
    );
};

function BookOrderCard ({item}) {
    return(
        <div className='cart-book-detail'>
            <Image
                alt = {item.book.title}
                src = {item.book.cover}
                width = {100}
            />
            <div>
                <Link to={`/book/${item.book.id}`}>
                    {item.book.title}
                </Link>
                <br></br>
                <p>{`${item.book.price / 100}元 共${item.number}本`}</p>
            </div>
        </div>
    );
};

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

export { BookCartCard, BookOrderCard, BookOrderCardList };

