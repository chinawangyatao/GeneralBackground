import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppMain from './App';
import { Provider } from 'react-redux';
import store from './store';
import { ConfigProvider, App } from 'antd';
import theme from './theme';
import { DevSupport } from '@react-buddy/ide-toolbox';
import { ComponentPreviews, useInitial } from '@/dev';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ConfigProvider theme={theme}>
      <DevSupport ComponentPreviews={ComponentPreviews} useInitialHook={useInitial}>
        <App>
          <AppMain />
        </App>
      </DevSupport>
    </ConfigProvider>
  </Provider>
);
