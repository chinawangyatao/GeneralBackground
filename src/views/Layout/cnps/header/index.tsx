import React, { memo, useEffect, useState } from 'react';
import { HeaderWrapper } from './style';
import { Avatar, Dropdown, Layout, message } from 'antd';
import { LogoutOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import { getToken, removeToken } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { logOut, userInfo } from '@/service/api';

const Index = memo(() => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState('');
  useEffect(() => {
    getUserInfo();
  }, []);
  const getUserInfo = async () => {
    try {
      const res: any = await userInfo();
      setAvatar(res.user.avatar + `?token=${getToken('access_token')}`);
    } catch (e) {
      console.log(e);
    }
  };
  const logOutHandle = async () => {
    removeToken('access_token');
    try {
      const res: any = await logOut();
      if (res.code == 200) {
        message.success('退出成功');
      }
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };
  const items = [
    {
      key: '1',
      label: <a onClick={() => message.warning({ content: '尚未开发' })}>个人中心</a>,
      icon: <UserOutlined />,
    },
    {
      key: '2',
      label: <a onClick={() => message.warning({ content: '尚未开发' })}>消息中心</a>,
      icon: <MessageOutlined />,
    },
    {
      key: '3',
      label: <a onClick={logOutHandle}>注销</a>,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <>
      <HeaderWrapper>
        <Layout.Header>
          <div className={'avatar'}>
            <Dropdown menu={{ items }}>
              {avatar ? (
                <Avatar crossOrigin={'anonymous'} size={40} src={avatar} />
              ) : (
                <Avatar crossOrigin={'anonymous'} size={40} src={<UserOutlined />} />
              )}
            </Dropdown>
          </div>
        </Layout.Header>
      </HeaderWrapper>
    </>
  );
});

export default Index;
