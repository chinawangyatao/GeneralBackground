import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import { Avatar, Dropdown, Layout, message } from 'antd';
import { LogoutOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';
import { removeToken } from '@/utils';
import { useNavigate } from 'react-router-dom';
import { logOut } from '@/service/api';

const Index = memo(() => {
  const navigate = useNavigate();
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
              <Avatar style={{ background: '#1677ff', cursor: 'pointer' }} size={35} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Layout.Header>
      </HeaderWrapper>
    </>
  );
});

export default Index;
