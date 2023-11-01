import { lazy } from 'react';
import { AppstoreOutlined, ClusterOutlined, DashboardOutlined, UserOutlined } from '@ant-design/icons';

const Dashboard = lazy(() => import('@/views/Dashboard/index'));
const Dict = lazy(() => import('@/views/Dict/index'));
const Role = lazy(() => import('@/views/Sys/Role/index'));
const User = lazy(() => import('@/views/Sys/User/index'));
const SwaggerUI = lazy(() => import('@/views/SwaggerUI/index'));

const routes = [
  { name: '仪表台', path: '/dashboard', key: '/dashboard', element: <Dashboard />, icon: <DashboardOutlined /> },
  { name: '字典设置', path: '/dict', key: '/dict', element: <Dict />, icon: <AppstoreOutlined /> },

  {
    name: '系统设置',
    path: '/sys',
    key: '/sys',
    icon: <AppstoreOutlined />,
    children: [
      { name: '角色配置', path: '/sys/role', key: '/sys/role', element: <Role />, icon: <ClusterOutlined /> },
      { name: '用户设置', path: '/sys/user', key: '/sys/user', element: <User />, icon: <UserOutlined /> },
    ],
  },
  { name: 'SwaggerUI', path: '/swaggerUI', key: '/swaggerUI', element: <SwaggerUI />, icon: <AppstoreOutlined /> },
];

export default routes;
