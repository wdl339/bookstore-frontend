import { MoneyCollectOutlined } from '@ant-design/icons';
import { Card, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Meta } = Card;

function BookCard ({book}) {
    return(
        
            <Card
                className='book-card'
                hoverable
                cover={
                    <Image
                        alt = {book.title}
                        src = {book.cover}
                    />
                }
            >
                <Link to={`/book/${book.id}`}>
                    <Meta
                    title={book.title}
                    description={
                        <>
                            <MoneyCollectOutlined /> 
                            <span>{book.price}元</span>
                        </>
                    }
                    />
                </Link>
            </Card>
    );
};

export default BookCard;