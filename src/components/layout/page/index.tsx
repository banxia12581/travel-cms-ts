/**
 * @description 公共布局-页面
 */
import React from 'react';
import './index.less';

function Page({ ...props }) {
  const { children } = props;
  return <div className='page'>{children}</div>;
}
export default Page;
