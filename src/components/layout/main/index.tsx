/**
 * @description 公共布局-主内容区域
 */
import React from 'react';
import './index.less';

function Main({ ...props }) {
  const { children } = props;
  return <div className='main'>{children}</div>;
}
export default Main;
