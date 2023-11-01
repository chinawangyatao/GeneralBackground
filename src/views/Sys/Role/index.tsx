import React, { memo, useEffect, useState } from 'react';
import { RoleWrapper } from '@/views/Sys/Role/style';
import { Button, Card, Empty, Space, Switch, Table } from 'antd';
import VmSearchComponent from '@/components/VmQueryFilterComponent';
import { PlusOutlined } from '@ant-design/icons';
import { ColumnsType } from 'antd/es/table';
import { ColumnsDataType } from '@/views/Sys/User/type';
import { roleList } from '@/service/api';

const Index = memo(() => {
  const [roleData, setRoleData] = useState([]);
  useEffect(() => {
    getRoleData();
  }, []);
  const getRoleData = async (p?: any) => {
    try {
      const params = {
        pageNum: 1,
        pageSize: 10,
        ...p,
      };
      const { rows }: any = await roleList(params);
      setRoleData(rows);
    } catch (err) {
      console.log(err);
    }
  };
  const filterList = {
    onFinishHandle: async (e: any) => {
      const params = {
        roleName: e.roleName,
        status: e.status?.value,
        roleKey: e.roleKey,
      };
      await getRoleData(params);
    },
    onResetHandle: getRoleData,
    list: [
      { type: 'ProFormText', name: 'roleName', label: '角色名称', config: {} },
      { type: 'ProFormText', name: 'roleKey', label: '权限字符', config: {} },
      {
        type: 'ProFormSelect',
        name: 'status',
        label: '状态',
        valueEnum: { 0: '正常', 1: '停用' },
        config: {},
      },
      { type: 'ProFormDateRangePicker', key: 'createTime', name: 'createTime', label: '创建时间', config: {} },
    ],
  };
  return (
    <>
      <RoleWrapper>
        <Card>
          <VmSearchComponent VmQueryFilterList={filterList} />
          <Space align={'center'}>
            <Button type={'primary'} icon={<PlusOutlined />}>
              新增
            </Button>
          </Space>
          <Table
            locale={{ emptyText: <Empty description={'无数据'} /> }}
            columns={columns}
            dataSource={roleData}
            rowKey={record => record.roleId}
          />
        </Card>
      </RoleWrapper>
    </>
  );
});
// 表头
let columns: ColumnsType<ColumnsDataType> = [
  {
    title: '角色编号',
    dataIndex: 'roleId',
    key: 'roleId',
  },
  {
    title: '角色名称',
    dataIndex: 'roleName',
    key: 'roleName',
  },
  {
    title: '权限字符',
    dataIndex: 'roleKey',
    key: 'roleKey',
  },
  {
    title: '显示顺序',
    dataIndex: 'roleSort',
    key: 'roleSort',
  },
  {
    title: '状态',
    dataIndex: 'status',
    key: 'status',
    render: (value, record) => (
      <Space>
        <Switch checked={record.status === '0'} />
      </Space>
    ),
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
      <Space size={5}>
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
export default Index;
