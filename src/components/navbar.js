import { BarChartOutlined, DollarOutlined, HomeOutlined, LoginOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Col, Menu, Row } from 'antd';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';

const Navbar = () => {
  const location = useLocation();
  const current = location.pathname.split('/');

  const items = [
    {
      label: <Link to={"/login"} className='navbarLabel'>{"登录"}</Link>,
      key: 'login',
      icon: <LoginOutlined />,
    },
    {
      label: <Link to={"/"} className='navbarLabel'>{"首页"}</Link>,
      key: '',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/cart"} className='navbarLabel'>{"购物车"}</Link>,
      key: 'cart',
      icon:<ShoppingCartOutlined />,
    },
    {
      label: <Link to={"/order"} className='navbarLabel'>{"订单"}</Link>,
      key: 'order',
      icon: <DollarOutlined />,
    },
    {
      label: <Link className='navbarLabel'>{"统计"}</Link>,
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
    <Row justify="space-between">
        <Col>
          <Link className="title" to="/">
            e-BookStore
          </Link>
        </Col>
        <Col flex="auto">
          <Menu selectedKeys={[current]} mode="horizontal" items={
            items.map((item) => {
              if (item.key === current[1]) {
                item.className = 'ant-menu-item-selected';
                return { ...item, selected: true };
              }
              return { ...item};
            })
          } />
        </Col>
        <Col>
          <Avatar size="large" icon={<UserOutlined />}/>
        </Col>
    </Row>
  );

};

export default Navbar;