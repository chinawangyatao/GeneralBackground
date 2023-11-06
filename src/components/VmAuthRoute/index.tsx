import React, { memo, ReactNode } from 'react';
import { getToken } from '@/utils';
import { Navigate } from 'react-router-dom';
import { message } from 'antd';

interface IndexProps {
  children: ReactNode;
}

const Index = ({ children }: IndexProps) => {
  const [messageApi] = message.useMessage();

  const token = getToken('access_token');

  if (!token) {
    messageApi.warning('用户信息已经过期，请登录！');
  }
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to={'/login'} />;
  }
};

export default Index;
