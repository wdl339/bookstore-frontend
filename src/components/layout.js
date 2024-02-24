import { Layout } from 'antd';
import React from 'react';
import '../css/layout.css';
import Navbar from './navbar';
const { Header, Content, Footer } = Layout;

function MainLayout(page) {

  return (
    <Layout className='layout'>
      <Header>
        <Navbar></Navbar>
      </Header>
      <Content>
        {page.children}
      </Content>
      <Footer>
        e-BookStore ©{new Date().getFullYear()} Created by wdl
      </Footer>
    </Layout>
  );
};

export default MainLayout;