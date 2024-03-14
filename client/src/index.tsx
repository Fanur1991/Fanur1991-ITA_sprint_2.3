import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        cssVar: true,
        hashed: false,
        token: {
          fontFamily: 'Montserrat, sans-serif',
          colorBgElevated: '#f5f5f5',
          controlItemBgHover: '#bae0ff',
        },
        components: {
          Button: {
            colorPrimary: '#04bbec',
            colorPrimaryHover: '#04bbec',
            colorPrimaryActive: '#04bbec',
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
