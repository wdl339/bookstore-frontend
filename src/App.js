import { ConfigProvider, Layout, theme } from 'antd';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/navbar';
import Router from './components/router';
import './css/app.css';
const { Header, Content, Footer } = Layout;

function App() {

  return <ConfigProvider
  theme={{
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#4096ff',
      borderRadius: 4,
    },
  }}
>
    <BrowserRouter>
      <Layout className='layout'>
        <Header>
            <Navbar></Navbar>
        </Header>
        <Content>
            <Router></Router>
        </Content>
        <Footer>
          e-BookStore ©{new Date().getFullYear()} Created by wdl
        </Footer>
      </Layout>
    </BrowserRouter>
    
  </ConfigProvider>
}

export default App;