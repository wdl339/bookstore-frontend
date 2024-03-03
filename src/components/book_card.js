import { MoneyCollectOutlined } from '@ant-design/icons';
import { Card, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Meta } = Card;

function BookCard ({book}) {
    return(
        <Link to={`/book/${book.id}`}>
            <Card
                hoverable
                cover={
                    <Image
                        alt = {book.title}
                        src = {book.cover}
                    />
                }
            >
                <Meta
                    title={book.title}
                    description={
                        <div>
                            <MoneyCollectOutlined /> 
                            <span>{book.price}元</span>
                        </div>
                    }
                />
            </Card>
        </Link>
    );
};

export default BookCard;