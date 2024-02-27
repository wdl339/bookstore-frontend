import { BarChartOutlined, DollarOutlined, HomeOutlined, LoginOutlined, ShoppingCartOutlined } from '@ant-design/icons';
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
      label: <Link to={"/cart"}>{"购物车"}</Link>,
      key: 'cart',
      icon:<ShoppingCartOutlined />,
    },
    {
      label: <Link to={"/order"}>{"订单"}</Link>,
      key: 'order',
      icon: <DollarOutlined />,
    },
    {
      label: "统计",
      key: 'data',
      icon: <BarChartOutlined />,
      children: [
        {
          label: <Link to={"/webData"}>{'全站'}</Link>,
          key: 'data:rank',
        },
        {
          label: <Link to={"/myData"}>{'用户'}</Link>,
          key: 'data:user',
        },
      ],
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