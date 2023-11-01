import React, { memo, Suspense, useEffect, useState } from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { LayoutWrapper } from './style';
import Header from './cnps/header';
import routes from '@/router';
import { RouteObject, useLocation, useNavigate, useRoutes } from 'react-router-dom';
import VmBreadcrumb from '@/views/Layout/cnps/VmBreadcrumb';
import { useAppDispatch } from '@/store';
import { getUserInfo } from '@/store/features/userSlice';

const Index = memo(() => {
  const dispatch = useAppDispatch();
  dispatch(getUserInfo());
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, []);
  const getRoutesList: RouteObject[] = routes as RouteObject[];
  return (
    <>
      <LayoutWrapper>
        <Layout>
          <div className={'layoutLeft'}>
            <Layout.Sider width={200} breakpoint={'lg'} collapsedWidth="0" className={'siderLeft'}>
              <div className="demo-logo-vertical">ruoyi-react</div>
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                defaultOpenKeys={[localStorage.getItem('defaultOpenMenu') ?? 'defaultValue']}
                onSelect={e => {
                  localStorage.setItem('defaultOpenMenu', e.keyPath[1]);
                  navigate(e.key);
                }}
                items={getRoutesList.map((item: any, index) => ({
                  key: item.path,
                  icon: item.icon,
                  label: item.name,
                  children: item['children']?.map((x: any) => {
                    return {
                      key: x.path,
                      icon: x.icon,
                      label: x.name,
                    };
                  }),
                }))}
              />
            </Layout.Sider>
          </div>

          <Layout style={{ minHeight: '100vh', position: 'relative' }}>
            <Header />
            <Row style={{ marginTop: '80px', height: '100%' }}>
              <Col span={23}>
                <Layout.Content style={{ marginLeft: '20px', width: '100%' }}>
                  <VmBreadcrumb />
                  <Suspense fallback={'loading...'}>{useRoutes(getRoutesList)}</Suspense>
                </Layout.Content>
              </Col>
            </Row>

            <Layout.Footer>
              <Row>
                <Col span={12} offset={6}>
                  <div className={'footerStyle'}>
                    <div>通用后台管理系统</div>
                    <div> ©️2023 微梦创新技术部出品</div>
                  </div>
                </Col>
              </Row>
            </Layout.Footer>
          </Layout>
        </Layout>
      </LayoutWrapper>
    </>
  );
});

export default Index;
