import React, { memo, useEffect, useState } from 'react';
import { UserWrapper } from '@/views/Sys/User/style';
import VmTreeComponent from '@/components/VmTreeComponent';
import { Button, Card, Col, Empty, message, Modal, Row, Space, Switch, Table, TreeProps } from 'antd';
import { changeStatus, userInfoTree, userList } from '@/service/api';
import { userListPropTypes } from '@/service/api/type';
import { ColumnsDataType } from '@/views/Sys/User/type';
import { ColumnsType } from 'antd/es/table';
import VmSearchComponent from '@/components/VmQueryFilterComponent';
import { ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';
import ModelTable from '@/views/Sys/User/cnps/modelTable';

// 表头

const Index = memo(() => {
  const [userInfoTreeList, setUserInfoTreeList] = useState([]);
  const [userData, setUserData] = useState([]);
  const [openModel, setOpenModel] = useState(false);
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

  const upDataStatus = async (status: any) => {
    await changeStatus(status);
  };

  const onSelect: TreeProps['onSelect'] = async selectedKeys => {
    const [deptId] = selectedKeys;
    await getUserListInfo({ deptId });
  };

  const changeUserStatus = (e: boolean, value: string, data: any) => {
    Modal.confirm({
      title: '系统提示',
      content: `确认要${e ? '启用' : '停用'}"${value}"用户吗？`,
      icon: <ExclamationCircleFilled />,
      onOk: async () => {
        const status = {
          status: e ? '0' : '1',
          userId: data.userId,
        };
        const res: any = await changeStatus(status);
        await getUserListInfo();
        message.success({
          content: res.msg,
        });
      },
    });
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
          <Switch checked={record.status === '0'} onChange={e => changeUserStatus(e, record.userName, record)} />
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
                <Button
                  type={'primary'}
                  icon={<PlusOutlined />}
                  onClick={e => {
                    setOpenModel(true);
                  }}
                >
                  新增
                </Button>
              </Space>
              <Table
                locale={{ emptyText: <Empty description={'无数据'} /> }}
                columns={columns}
                dataSource={userData}
                rowKey={record => record.userId}
              />
              <ModelTable open={openModel} colse={() => setOpenModel(false)} />
            </Card>
          </Col>
        </Row>
      </UserWrapper>
    </>
  );
});
export default Index;
