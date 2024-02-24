import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Image } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
const { Meta } = Card;

function BookCard ({book}) {
    return(
        <Link>
            <Card
                hoverable
                cover={
                <Image
                    alt = {book.title}
                    src = {book.cover}
                />
                }
                actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                title = {book.title}
                description = {book.description}
                />
            </Card>
        </Link> 
    );
};

export default BookCard;