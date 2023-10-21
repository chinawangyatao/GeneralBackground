import React, { memo } from 'react';
import { DashboardWrapper } from '@/views/Dashboard/style';
import { Card, Col, Row } from 'antd';
import OverviewCard from '@/views/Dashboard/cnps/overviewCard';
import { cardList, cardList1 } from '@/views/Dashboard/cardList';
import Rankings from '@/views/Dashboard/cnps/Rankings';

const Index = memo(() => {
  return (
    <>
      <DashboardWrapper>
        <Row gutter={[10, 10]}>
          {cardList.map((item, index): any => {
            return (
              <Col key={index} span={6}>
                <OverviewCard options={item} />
              </Col>
            );
          })}
        </Row>
        <Row gutter={[10, 10]} style={{ marginTop: '10px' }}>
          {cardList.map((item, index): any => {
            return (
              <Col key={index} span={12}>
                <OverviewCard options={item} />
              </Col>
            );
          })}
        </Row>
        <Row gutter={[10, 10]} style={{ marginTop: '10px' }}>
          {cardList1.map((item, index): any => {
            return (
              <Col key={index} span={18}>
                <OverviewCard options={item} />
              </Col>
            );
          })}
          <Col span={6}>
            <Rankings />
          </Col>
        </Row>
        <Row gutter={[10, 10]} style={{ marginTop: '10px' }}>
          {cardList.map((item, index): any => {
            return (
              <Col key={index} span={24}>
                <OverviewCard options={item} />
              </Col>
            );
          })}
        </Row>
      </DashboardWrapper>
    </>
  );
});

export default Index;
