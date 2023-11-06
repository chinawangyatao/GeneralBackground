import React, { memo, useEffect, useState } from 'react';
import { Col, Form, Input, Modal, Radio, Row, Select, TreeSelect } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const Index = memo(({ open, colse }: any) => {
  const [value, setValue] = useState('');
  const [treeSelectData, setTreeSelectData] = useState([]);

  const onChange = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <Modal title={'添加用户'} open={open} width={800} onOk={colse} onCancel={colse}>
        <Form labelCol={{ span: 6 }}>
          <Row>
            <Col span={12}>
              <Form.Item label={'用户昵称'}>
                <Input placeholder={'请输入用户昵称'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={'归属部门'}>
                <TreeSelect
                  showSearch
                  style={{ width: '100%' }}
                  value={value}
                  dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                  placeholder="请选择归属部门"
                  allowClear
                  treeDefaultExpandAll
                  onChange={onChange}
                  treeData={treeSelectData}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label={'手机号码'}>
                <Input placeholder={'请输入手机号码'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={'邮箱'}>
                <Input placeholder={'请输入邮箱'} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label={'用户名称'}>
                <Input placeholder={'请输入用户名称'} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={'用户密码'}>
                <Input.Password placeholder={'请输入密码'} />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label={'用户性别'}>
                <Select
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="请选择性别"
                  options={[
                    { value: '0', label: '男' },
                    { value: '1', label: '女' },
                    { value: '2', label: '未知' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={'状态'}>
                <Radio.Group defaultValue={0}>
                  <Radio value={0}>正常</Radio>
                  <Radio value={1}>停用</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Form.Item label={'岗位'}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="请选择岗位"
                  defaultValue={['董事长', '技术']}
                  options={[
                    { value: 'CEO', label: '董事长' },
                    { value: 'IT', label: '技术' },
                    { value: 'HR', label: '人力' },
                    { value: 'YG', label: '员工' },
                  ]}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label={'角色'}>
                <Select
                  mode="multiple"
                  allowClear
                  style={{ width: '100%' }}
                  placeholder="请选择角色"
                  defaultValue={['普通用户']}
                  options={[{ value: 'PT', label: '普通用户' }]}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item labelCol={{ span: 3 }} label={'备注'}>
                <TextArea
                  showCount
                  maxLength={100}
                  style={{ height: 80, resize: 'none' }}
                  onChange={onChange}
                  placeholder="请输入内容"
                />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
});

export default Index;
