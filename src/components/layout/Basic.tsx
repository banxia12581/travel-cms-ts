/**
 * @description 包含公共头、底、导航菜单的基础布局
 */
import React from 'react';
import Page from './page';
import Sidebar from './sidebar';
import Header from './header';
import Content from './content';
import Main from './main';

function BasicLayout({ ...props }) {
  return (
    <Page>
      <Header />
      <Main>
        <Sidebar />
        <Content>{props.children}</Content>
      </Main>
    </Page>
  );
}

export default BasicLayout;
