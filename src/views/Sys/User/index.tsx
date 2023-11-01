import React, { memo, useEffect, useState } from 'react';
import { UserWrapper } from '@/views/Sys/User/style';
import VmTreeComponent from '@/components/VmTreeComponent';
import { Button, Card, Col, Empty, Row, Space, Switch, Table, TreeProps } from 'antd';
import VmTableComponent from '@/components/VmTableComponent';
import { userInfoTree, userList } from '@/service/api';
import { userListPropTypes } from '@/service/api/type';
import { ColumnsDataType } from '@/views/Sys/User/type';
import { ColumnsType } from 'antd/es/table';
import VmSearchComponent from '@/components/VmQueryFilterComponent';
import { DownloadOutlined, EditOutlined, PlusOutlined, UploadOutlined } from '@ant-design/icons';
import { getUserInfo } from '@/store/features/userSlice';

// 表头
let columns: ColumnsType<ColumnsDataType> = [
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
    render: (_, record) => <span>{record.dept.deptName}</span>,
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
    render: (_, record) => (
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
        {!value.admin && (
          <>
            <Button type={'primary'} size={'small'}>
              修改
            </Button>
            <Button type={'primary'} size={'small'} danger={true}>
              删除
            </Button>
            <Button type={'primary'} size={'small'}>
              更多
            </Button>
          </>
        )}
      </Space>
    ),
  },
];

const Index = memo(() => {
  const [userInfoTreeList, setUserInfoTreeList] = useState([]);
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    getUserTreeInfo();
    getUserListInfo();
  }, []);
  const getUserTreeInfo = async () => {
    try {
      const { data }: any = await userInfoTree();
      setUserInfoTreeList(data);
    } catch (e) {
      console.log(e);
    }
  };

  const getUserListInfo = async (p?: any) => {
    try {
      const { rows }: userListPropTypes = await userList({
        pageNum: '1',
        pageSize: '10',
        ...p,
      });
      setUserData(rows);
    } catch (e) {
      console.log(e);
    }
  };

  const onSelect: TreeProps['onSelect'] = async selectedKeys => {
    const [deptId] = selectedKeys;
    await getUserListInfo({ deptId });
  };

  const filterList = {
    onFinishHandle: async (e: any) => {
      const params = {
        userName: e.userName,
        phonenumber: e.phonenumber,
        status: e.status?.value,
      };
      await getUserListInfo(params);
    },
    onResetHandle: getUserListInfo,
    list: [
      { type: 'ProFormText', name: 'userName', label: '用户名称', config: {} },
      { type: 'ProFormText', name: 'phonenumber', label: '手机号码', config: {} },
      {
        type: 'ProFormSelect',
        name: 'status',
        label: '状态',
        valueEnum: { 0: '正常', 1: '停用' },
        config: {},
      },
    ],
  };
  return (
    <>
      <UserWrapper>
        <Row gutter={12}>
          <Col span={5}>
            <VmTreeComponent userInfoTreeList={userInfoTreeList} onSelect={onSelect} />
          </Col>
          <Col span={19}>
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
                dataSource={userData}
                rowKey={record => record.userId}
              />
            </Card>
          </Col>
        </Row>
      </UserWrapper>
    </>
  );
});
export default Index;
