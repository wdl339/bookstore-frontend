import { BarChartOutlined, HomeOutlined, PayCircleOutlined, ShoppingCartOutlined, UserOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Avatar, Col, Menu, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/navbar.css';
import { getAvatar } from '../service/user';


const Navbar = () => {
  const location = useLocation();
  const current = location.pathname.split('/');
  const [avatarUrl, setAvatarUrl] = useState('');

  const getUserAvatar = async () => {
    if (window.location.pathname === '/login' || window.location.pathname === '/register') {
      return;
    }
    const res = await getAvatar();
    if (res) {
      setAvatarUrl(res.avatar);
    }
  };

  useEffect(() => {
    getUserAvatar();
  }, []);

  const items = [
    // {
    //   label: <Link to={"/login"} className='navbarLabel'>{"登录"}</Link>,
    //   key: 'login',
    //   icon: <LoginOutlined />,
    // },
    {
      label: <Link to={"/"} className='navbarLabel'>{"首页"}</Link>,
      key: '',
      icon: <HomeOutlined />,
    },
    {
      label: <Link to={"/cart"} className='navbarLabel'>{"购物车"}</Link>,
      key: 'cart',
      icon: <ShoppingCartOutlined />,
    },
    {
      label: <Link to={"/order"} className='navbarLabel'>{"订单"}</Link>,
      key: 'order',
      icon: <PayCircleOutlined />,
    },
    {
      label: <Link className='navbarLabel'>{"统计"}</Link>,
      key: 'data',
      icon: <BarChartOutlined />,
      children: [
        {
          label: <Link to={"/webData"}>{'全站'}</Link>,
          key: 'webData',
        },
        {
          label: <Link to={"/myData"}>{'用户'}</Link>,
          key: 'myData',
        },
      ],
    },
    {
      label: <Link to={"/manage"} className='navbarLabel'>{"管理"}</Link>,
      key: 'manage',
      icon: <UsergroupAddOutlined />,
    },
    {
      label: <Link to={"/profile"} className='navbarLabel'>{"个人"}</Link>,
      key: 'profile',
      icon: <UserOutlined />,
    }
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
          <Avatar 
            src={avatarUrl} 
            alt='avatar' 
            onClick={() => window.location.href = '/profile'}
          />
        </Col>
    </Row>
  );

};

export default Navbar;