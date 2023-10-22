import React, { memo } from 'react';
import { Card } from 'antd';

const Index = memo(() => {
  return (
    <>
      <Card>
        <div style={{ minHeight: '70vh' }}>
          <iframe width={'100%'} height={'660px'} src={'http://8mihg3.natappfree.cc/swagger-ui/index.html'} />
        </div>
      </Card>
    </>
  );
});

export default Index;
