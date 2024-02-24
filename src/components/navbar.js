import { BookOutlined, HomeOutlined, LoginOutlined, MoneyCollectOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Col, Menu, Row } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const current = location.pathname.split('/');

  const items = [
    {
      label: <Link to={"/login"}>{"登录"}</Link>,
      key: 'login',
      icon: <LoginOutlined />,
    },
    {
      label: <Link to={"/"}>{"首页"}</Link>,
      key: 'main',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/books"}>{"书籍"}</Link>,
      key: 'book',
      icon: <BookOutlined />,
    },
    {
      label: <Link to={"/cart"}>{"购物车"}</Link>,
      key: 'cart',
      icon:<ShoppingCartOutlined />,
    },
    {
      label: <Link to={"/order"}>{"订单"}</Link>,
      key: 'order',
      icon: <MoneyCollectOutlined />,
    },
  ];


  return (
    <Row>
        <Col><Link className="title" to="/">e-BookStore</Link></Col>
        <Col><Menu selectedKeys={[current]} mode="horizontal" items={items} /></Col>
    </Row>
  );

};

export default Navbar;