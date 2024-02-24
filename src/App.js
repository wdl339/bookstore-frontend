import { ConfigProvider, theme } from 'antd';
import React from 'react';
import Router from './components/router';

function App() {

  return <ConfigProvider
  theme={{
    algorithm: theme.defaultAlgorithm,
    token: {
      colorPrimary: '#1677FF',
      borderRadius: 4,
    },
  }}
>
    <Router />
  </ConfigProvider>
}

export default App;