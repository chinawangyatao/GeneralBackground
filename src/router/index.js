import { lazy } from 'react';
import { AppstoreOutlined, DashboardOutlined } from '@ant-design/icons';

const Dashboard = lazy(() => import('@/views/Dashboard/index'));
const Dict = lazy(() => import('@/views/Dict/index'));
const Role = lazy(() => import('@/views/Role/index'));
const User = lazy(() => import('@/views/User/index'));
const Sys = lazy(() => import('@/views/Sys/index'));
const SwaggerUI = lazy(() => import('@/views/SwaggerUI/index'));

const routes = [
  { name: '仪表台', path: '/dashboard', key: '/dashboard', element: <Dashboard />, icon: <DashboardOutlined /> },
  { name: '字典设置', path: '/dict', key: '/dict', element: <Dict />, icon: <AppstoreOutlined /> },
  { name: '角色配置', path: '/role', key: '/role', element: <Role />, icon: <AppstoreOutlined /> },
  { name: '用户设置', path: '/user', key: '/user', element: <User />, icon: <AppstoreOutlined /> },
  {
    name: '系统设置',
    path: '/sys',
    key: '/sys',
    element: <Sys />,
    icon: <AppstoreOutlined />,
    children: [
      { name: '测试', key: '123' },
      { name: '测试 2', key: '456' },
    ],
  },
  { name: 'SwaggerUI', path: '/swaggerUI', key: '/swaggerUI', element: <SwaggerUI />, icon: <AppstoreOutlined /> },
];

export default routes;
