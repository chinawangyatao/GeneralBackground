import React, { memo } from 'react';
import { OverviewCardWrapper } from '@/views/Dashboard/cnps/overviewCard/style';
import { Card, Divider, Popover } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import EChartsReact, { EChartsOption } from 'echarts-for-react';

interface OverviewCardProps {
  options: any;
}

const Index: React.FC<OverviewCardProps> = memo(props => {
  console.log(props);
  let { title, content, name, quota, option, height }: any = props.options;
  console.log('Option:', option);
  return (
    <OverviewCardWrapper>
      <Card
        size={'small'}
        title={title}
        extra={
          <Popover content={<span>{content}</span>} title={'说明'} trigger="hover">
            <ExclamationCircleOutlined />
          </Popover>
        }
        loading={false}
      >
        <div>
          <EChartsReact option={option} style={{ height: height }} />
        </div>
        <Divider style={{ margin: '0px 0 24px ', cursor: 'pointer' }} />
        <div>
          {name}
          <span style={{ marginLeft: '10px' }}>{quota}</span>
        </div>
      </Card>
    </OverviewCardWrapper>
  );
});

export default Index;
