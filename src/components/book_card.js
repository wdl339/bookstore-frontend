import { MoneyCollectOutlined } from '@ant-design/icons';
import { Card, Image } from 'antd';
import React from 'react';
const { Meta } = Card;

function BookCard ({book}) {

    const onClick = () => {
        window.location.href = `/book/${book.id}`;
    };

    return(
        <Card
            hoverable
            cover={
                <Image
                    alt = {book.title}
                    src = {book.cover}
                />
            }
            onClick={onClick}
        >
            <Meta
                title={book.title}
                description={
                    <div>
                        <MoneyCollectOutlined /> 
                        <span>{` ${book.price / 100}元`}</span>
                    </div>
                }
            />
        </Card>     
    );
};

export default BookCard;