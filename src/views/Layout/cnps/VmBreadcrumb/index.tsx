import React, { memo } from 'react';
import { BreadcrumbsWrapper } from '@/views/Layout/cnps/VmBreadcrumb/style';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import routes from '@/router';
import { JSX } from 'react/jsx-runtime';
import { routesMap } from '@/router/routesMap';

const Index = memo(() => {
  const location = useLocation();
  routesMap();
  // console.log(location);
  const pathName = () => {
    let items: { title: JSX.Element }[] = [];
    routes.forEach((item, index) => {
      if (item.path === location.pathname) {
        items.push({ title: <Link to={location.pathname}>{item.name}</Link> });
      }
    });
    return items;
  };
  return (
    <>
      <BreadcrumbsWrapper>
        <Breadcrumb items={pathName()}></Breadcrumb>
      </BreadcrumbsWrapper>
    </>
  );
});

export default Index;
