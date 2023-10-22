import React, { memo, Suspense } from 'react';
import { Col, Layout, Menu, Row } from 'antd';
import { LayoutWrapper } from './style';
import Header from './cnps/header';
import routes from '@/router';
import { RouteObject, useNavigate, useRoutes } from 'react-router-dom';
import VmBreadcrumb from '@/views/Layout/cnps/VmBreadcrumb';

const Index = memo(() => {
  const navigate = useNavigate();
  const getRoutesList: RouteObject[] = routes as RouteObject[];
  return (
    <>
      <LayoutWrapper>
        <Layout>
          <Layout.Sider
            width={200}
            breakpoint={'lg'}
            collapsedWidth="0"
            style={{ height: '100vh', overflow: 'hidden', position: 'fixed', top: 0, left: 0, zIndex: 100 }}
          >
            <div className="demo-logo-vertical">LOGO</div>
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['/dashboard']}
              onSelect={e => navigate(e.key)}
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
          <Layout style={{ minHeight: '100vh', position: 'relative' }}>
            <Header />
            <Row gutter={[40, 80]}>
              <Col span={24}></Col>
              <Col xxl={{ span: 20, offset: 3 }} xl={{ span: 20, offset: 4 }} lg={{ span: 20, offset: 5 }}>
                <Layout.Content style={{ marginLeft: '20px' }}>
                  <VmBreadcrumb />
                  <Suspense fallback={'loading...'}>{useRoutes(getRoutesList)}</Suspense>
                </Layout.Content>
              </Col>
            </Row>

            <Layout.Footer>
              <Row>
                <Col span={12} offset={8}>
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
