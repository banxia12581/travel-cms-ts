/**
 * @description 404
 */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Result, Button } from 'antd';

function Nofound() {
  const history = useHistory();
  return (
    <Result
      status='404'
      title='404'
      subTitle='当前页面不存在'
      extra={
        <Button type='primary' onClick={() => history.push('/')}>
          返回首页
        </Button>
      }
    />
  );
}
export default Nofound;
