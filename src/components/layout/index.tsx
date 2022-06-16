/**
 * @description 公共布局
 */
import React from 'react';
import { NO_LAYOUT } from '@/constants/common';
import BasicLayout from './Basic';
import BlankLayout from './Blank';

function Layout({ ...props }) {
  const pathname = window.location.pathname;
  /** @name 不需要布局页面的索引值  */
  const noLayoutIndex = NO_LAYOUT.indexOf(pathname);
  return noLayoutIndex === -1 ? <BasicLayout {...props} /> : <BlankLayout {...props} />;
}

export default Layout;
