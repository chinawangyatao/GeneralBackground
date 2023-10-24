import React, { memo, useEffect, useState } from 'react';
import { LoginWrapper } from './style';
import { Button, Card, Col, Form, Input, message, notification, Row } from 'antd';
import { code, login } from '@/service/api';
import { encrypt } from '@/utils/jsencrypt';
import { useNavigate } from 'react-router-dom';

const onFinishFailed = (e: any) => {
  console.log(e);
};
const Index = memo(() => {
  const [img, setImg] = useState('');
  const [captchaEnabled, setCaptchaEnabled] = useState(true);
  const [uuid, setUuid] = useState('');
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  useEffect(() => {
    getCode();
  }, []);
  // 提交方法
  const onFinish = async (e: any) => {
    const params = {
      ...e,
      uuid: uuid,
    };
    try {
      const res: any = await login(params);
      if (res.code === 200) {
        localStorage.setItem('access_token', res.data.access_token);
        messageApi.success('登录成功');
        navigate('/');
      } else {
        messageApi.warning(res.msg);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getCode = async () => {
    try {
      const res: any = await code();
      setImg('data:image/gif;base64,' + res.img);
      setCaptchaEnabled(res.captchaEnabled);
      setUuid(res.uuid);
    } catch (e) {
      console.log(e);
    }
  };
  const openWarning = () => {
    notification.error({
      message: '注意',
      description: '我们还未对外展开注册请联系客服',
    });
  };
  return (
    <LoginWrapper>
      {contextHolder}
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
            <Form.Item name={'code'}>
              <div className={'verificationCode'}>
                <div>
                  <Input bordered={false} placeholder={'请输入验证码'} className={'inputStyle'} />
                </div>
                {captchaEnabled ? <img width={50} src={img} alt={''} onClick={getCode} /> : ''}
              </div>
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
