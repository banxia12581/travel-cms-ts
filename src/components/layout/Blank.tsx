/**
 * @description 纯页面展示 不含头、底、导航菜单
 */
import React from 'react';
import './index.less';
import Page from './page';

function BlankLayout({ ...props }) {
  return (
    <div className='layout'>
      <Page>{props.children}</Page>
    </div>
  );
}

export default BlankLayout;
