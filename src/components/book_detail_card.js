import { MoneyCollectOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Button, Col, Divider, Image, InputNumber, Row, Space, Typography } from 'antd';
import React from 'react';
import '../css/book_detail.css';
const { Title, Paragraph } = Typography;


function BookDetailCard ({book,showModal}) {
    return(
        <Row>
            <Col span={8}>
                <Image
                    alt = {book.title}
                    src = {book.cover}
                />
            </Col>
            <Col span={16}>
                <Typography>

                    <Title level={2}>
                        {book.title}
                    </Title>

                    <Divider>作者</Divider>
                    <Paragraph>
                        {`${book.author} 著`}
                    </Paragraph>

                    <Divider>内容简介</Divider>
                    <Paragraph>
                        <pre>{book.description}</pre>
                    </Paragraph>

                    <Row>
                        <Col span={6} offset={1}> 
                            <Divider>销量</Divider>
                            <Paragraph>
                                <span className="red"> {book.sales}</span> 本
                            </Paragraph>
                        </Col>
                        <Col span={6} offset={2}>
                            <Divider>价格</Divider>
                            <Paragraph>
                                <span className="red"> {book.price}</span> 元
                            </Paragraph>
                        </Col>
                        <Col span={6} offset={2}>
                            <Divider>您的购买数量</Divider>
                            <InputNumber 
                                min={1} 
                                max={10} 
                                defaultValue={1} 
                                onChange={value => console.log(value)}
                            />
                        </Col>
                    </Row>

                    <Divider>购买</Divider>
                    <Space className='buy-button-group'>
                        <Button 
                            shape="round" 
                            icon={<ShoppingCartOutlined />}
                            size='large'
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