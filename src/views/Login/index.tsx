import React, { memo } from 'react';
import { LoginWrapper } from './style';
import { Button, Card, Col, Form, Input, notification, Row } from 'antd';

const onFinish = (e: any) => {
  console.log(e);
};
const onFinishFailed = (e: any) => {
  console.log(e);
};

const Index = memo(() => {
  // 消息弹出框
  const openWarning = () => {
    notification.error({
      message: '注意',
      description: '我们还未对外展开注册请联系客服',
    });
  };
  return (
    <LoginWrapper>
      <div className={'titleName'}>
        <h1>后台管理系统</h1>
        <p>一套基于 react 开发的后台管理系统</p>
        <p>由©️微梦创新团队开发</p>
      </div>
      <div className={'loginCard'}>
        <Card style={{ position: 'absolute' }}>
          <Form style={{ minWidth: 300 }} autoComplete="off" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item>
              <div className={'loginTitle'}>登录</div>
            </Form.Item>
            <Form.Item name={'username'}>
              <Input bordered={false} className={'inputStyle'} placeholder={'账户'} />
            </Form.Item>
            <Form.Item name={'password'}>
              <Input.Password bordered={false} className={'inputStyle'} placeholder={'密码'} />
            </Form.Item>
            <Form.Item>
              <Row gutter={6}>
                <Col span={12}>
                  <Button htmlType="submit" style={{ width: '100%' }} type={'primary'}>
                    登录
                  </Button>
                </Col>
                <Col span={12}>
                  <Button style={{ width: '100%' }} type={'primary'} onClick={openWarning}>
                    注册
                  </Button>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </LoginWrapper>
  );
});

export default Index;
