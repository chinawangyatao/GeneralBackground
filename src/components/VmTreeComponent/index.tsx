import React, { memo, useEffect, useState } from 'react';
import { Card, Col, Row, Tree, TreeProps } from 'antd';
import Search from 'antd/es/input/Search';
import { userList } from '@/service/api';

const Index = memo(({ userInfoTreeList, onSelect }: any) => {
  const [treeData, setTreeData] = useState(userInfoTreeList);
  useEffect(() => {
    setTreeData(userInfoTreeList);
  }, [userInfoTreeList]);

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  const searchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value == '' || value == null) {
      setTreeData(userInfoTreeList);
    } else {
      const newExpandedKeys: any = searchTree(userInfoTreeList, value);
      setTreeData(newExpandedKeys);
    }
  };

  return (
    <>
      <Card>
        <Row gutter={[0, 10]}>
          <Col span={24}>
            <Search placeholder="搜索" onChange={searchChange} />
          </Col>
          <Col span={24}>
            {treeData.length > 0 && (
              <Tree
                fieldNames={{ title: 'label', key: 'id' }}
                checkable={false}
                defaultExpandAll={true}
                onSelect={onSelect}
                onCheck={onCheck}
                treeData={treeData}
              />
            )}
          </Col>
        </Row>
      </Card>
    </>
  );
});
function searchTree(data: any, searchTerm: any) {
  const results: any[] = [];

  function searchObjects(obj: any) {
    if (obj.label.includes(searchTerm)) {
      results.push(obj);
    }

    if (obj.children) {
      for (const child of obj.children) {
        searchObjects(child);
      }
    }
  }

  for (const item of data) {
    searchObjects(item);
  }

  return results;
}
export default Index;
