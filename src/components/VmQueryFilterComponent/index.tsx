import React, { memo } from 'react';
import { VmQueryFilterComponentWrapper } from '@/components/VmQueryFilterComponent/style';
import {
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDateTimeRangePicker,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormTimePicker,
  QueryFilter,
} from '@ant-design/pro-components';
import { Skeleton } from 'antd';

type QueryFilterType = {
  VmQueryFilterList: any;
};

const Index: React.FC<QueryFilterType> = memo(props => {
  return (
    <>
      <VmQueryFilterComponentWrapper>
        <QueryFilter
          defaultCollapsed
          split
          onFinish={props.VmQueryFilterList.onFinishHandle}
          onReset={props.VmQueryFilterList.onResetHandle}
        >
          {props.VmQueryFilterList.list.length > 0 ? (
            props.VmQueryFilterList.list.map((item: any, index: number) => {
              switch (item.type) {
                case 'ProFormText':
                  return <ProFormText name={item.name} label={item.label} key={index} />;
                case 'ProFormDatePicker':
                  return <ProFormDatePicker name={item.name} label={item.label} key={index} />;
                case 'ProFormRadio':
                  return <ProFormRadio.Group name={item.name} label={item.label} options={item.options} key={index} />;
                case 'ProFormCheckbox':
                  return (
                    <ProFormCheckbox.Group name={item.name} label={item.label} options={item.options} key={index} />
                  );
                case 'ProFormSelect':
                  return (
                    <ProFormSelect
                      name={item.name}
                      label={item.label}
                      allowClear={false}
                      mode={item.config.mode}
                      fieldProps={{
                        labelInValue: true,
                      }}
                      valueEnum={item.valueEnum}
                      key={index}
                    />
                  );
                case 'ProFormDateRangePicker':
                  return <ProFormDateRangePicker key={item.key} width={'lg'} name={item.name} label={item.label} />;
              }
            })
          ) : (
            <Skeleton />
          )}
        </QueryFilter>
      </VmQueryFilterComponentWrapper>
    </>
  );
});

export default Index;
