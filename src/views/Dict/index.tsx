import React, { memo } from 'react';
import { DictWrapper } from '@/views/Dict/style';
import { Card } from 'antd';
import VmSearchComponent from 'src/components/VmQueryFilterComponent';
import VmTableComponent from '@/components/VmTableComponent';

const Index = memo(() => {
  const VmQueryFilterList = {
    handle: (e: any) => {
      console.log(e);
    },
    list: [
      { type: 'ProFormText', name: 'name', label: '应用名称', config: {} },
      { type: 'ProFormDatePicker', name: 'createDate', label: '创建时间', config: {} },
      {
        type: 'ProFormRadio',
        name: 'freq',
        label: '查询频度',
        options: [
          {
            value: 'weekly',
            label: '每周',
          },
          {
            value: 'quarterly',
            label: '每季度',
          },
          {
            value: 'monthly',
            label: '每月',
          },
          {
            value: 'yearly',
            label: '每年',
          },
        ],
        config: {},
      },
      {
        type: 'ProFormCheckbox',
        name: 'checkbox',
        label: '行业分布',
        options: ['农业', '制造业', '互联网', '畜牧业'],
        config: {},
      },
      {
        type: 'ProFormSelect',
        name: 'sex',
        label: '性别',
        valueEnum: { man: '男', woman: '女' },
        config: { mode: 'multiple' },
      },
    ],
  };
  return (
    <>
      <Card>
        <DictWrapper>
          <VmSearchComponent VmQueryFilterList={VmQueryFilterList} />
          <VmTableComponent></VmTableComponent>
        </DictWrapper>
      </Card>
    </>
  );
});

export default Index;
