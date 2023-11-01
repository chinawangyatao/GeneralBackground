import React, { memo } from 'react';
import { VmTableWrapper } from '@/components/VmTableComponent/style';
import { Button, Space, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { userListPropTypes } from '@/service/api/type';

const Index = memo(() => {
  console.log(columns);
  return (
    <>
      <VmTableWrapper>
        <Table columns={columns}></Table>
      </VmTableWrapper>
    </>
  );
});

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: '用户编号',
    dataIndex: 'userId',
    key: 'userId',
  },
  {
    title: '用户名称',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: '用户昵称',
    dataIndex: 'nickName',
    key: 'nickName',
  },
  {
    title: '部门',
    dataIndex: 'deptName',
    key: 'deptName',
  },
  {
    title: '手机号码',
    dataIndex: 'phonenumber',
    key: 'phonenumber',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: '创建时间',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: '操作',
    key: 'action',
    render: (value, record) => (
      <Space size={'middle'}>
        <Button type={'primary'} size={'small'}>
          修改
        </Button>
        <Button type={'primary'} size={'small'} danger={true}>
          删除
        </Button>
        <Button type={'primary'} size={'small'}>
          更多
        </Button>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sydney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
export default Index;
