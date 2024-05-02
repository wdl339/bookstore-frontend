import { MoneyCollectOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Image, InputNumber, Row, Space, Typography } from 'antd';
import React from 'react';
import '../css/book_detail.css';
const { Title, Paragraph } = Typography;

function BookDetailCard ({book,showModal}) {

    const addToCart = () => {
        console.log('add to cart');
        window.location.href = '/cart';
    }

    return(
        <Row>
            <Col span={8}>
                <Image
                    alt = {book.title}
                    src = {book.cover}
                />
            </Col>
            <Col span={16}>
                <Typography align="left">

                    <Title level={2}>
                        {book.title}
                    </Title>

                    <Row>
                        <Col span={6}> 
                            <Divider orientation="left" orientationMargin="0">作者</Divider>
                            <Paragraph>
                                {`${book.author} 著`}
                            </Paragraph>
                        </Col>
                        <Col span={6} offset={2}>
                            <Divider orientation="left" orientationMargin="0">ISBN编号</Divider>
                            <Paragraph>
                                {book.isbn}
                            </Paragraph>
                        </Col>
                    </Row>

                    <Divider orientation="left" orientationMargin="0">内容简介</Divider>
                    <Paragraph>
                        <pre>{book.description}</pre>
                    </Paragraph>

                    <Row>
                        <Col span={6}> 
                            <Divider orientation="left" orientationMargin="0">销量</Divider>
                            <Paragraph>
                                <span className="red-big-text"> {`${book.sales}本`}</span> 
                            </Paragraph>
                        </Col>
                        <Col span={6} offset={2}>
                            <Divider orientation="left" orientationMargin="0">库存</Divider>
                            <Paragraph>
                                <span className="red-big-text"> {`${book.stock}本`}</span> 
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={6}>
                            <Divider orientation="left" orientationMargin="0">价格</Divider>
                            <Paragraph>
                                <span className="red-big-text"> {`${book.price}元`}</span> 
                            </Paragraph>
                        </Col>
                        <Col span={6} offset={2}>
                            <Divider orientation="left" orientationMargin="0">您的购买数量</Divider>
                            <InputNumber 
                                min={1} 
                                defaultValue={1} 
                                size='large'
                                onChange={value => console.log(value)}
                            />
                        </Col>
                    </Row>

                    <Divider orientation="left" orientationMargin="0">购买</Divider>
                    <Space className='buy-button-group'>
                        <Button 
                            type="primary" 
                            shape="round" 
                            icon={<ShoppingCartOutlined />}
                            size='large'
                            onClick={addToCart}
                        >
                            加入购物车
                        </Button>

                        <Button 
                            type="primary" 
                            icon={<MoneyCollectOutlined /> } 
                            shape="round"
                            size='large'
                            onClick={showModal}
                        >
                            立即下单
                        </Button>
                    </Space>
                </Typography>
            </Col>
        </Row>
    );
};

export default BookDetailCard;