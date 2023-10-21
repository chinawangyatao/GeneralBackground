import React, { memo } from 'react';
import { HeaderWrapper } from './style';
import { Avatar, Dropdown, Layout, message } from 'antd';
import { LogoutOutlined, MessageOutlined, UserOutlined } from '@ant-design/icons';

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
    label: <a onClick={() => localStorage.removeItem('token')}>注销</a>,
    icon: <LogoutOutlined />,
  },
];
const Index = memo(() => {
  return (
    <>
      <HeaderWrapper>
        <Layout.Header>
          <div className={'avatar'}>
            <Dropdown menu={{ items }}>
              <Avatar style={{ background: '#1677ff', cursor: 'pointer' }} size={48} icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Layout.Header>
      </HeaderWrapper>
    </>
  );
});

export default Index;
