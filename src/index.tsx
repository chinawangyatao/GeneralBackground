import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppMain from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider, App } from 'antd';
import theme from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <App>
        <AppMain />
      </App>
    </ConfigProvider>
  </Provider>
);
