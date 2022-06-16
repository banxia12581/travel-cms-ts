/**
 * @description 公共头部
 */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, MenuProps } from 'antd';
import './index.less';
import { UserOutlined, FileImageOutlined, AppstoreOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { util } from '@/utils';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('用户中心', 'user', <UserOutlined />, [
    getItem(<NavLink to='/home'>数据中心</NavLink>, 'home'), 
    getItem(<NavLink to='/user/list'>用户列表</NavLink>, 'user_list')
  ]), 
  getItem( '游记管理', 'travel', <FileImageOutlined />, [
    getItem(<NavLink to='/travel/list'>文章列表</NavLink>, 'travel_list'), 
    getItem(<NavLink to='/travel/examine/list'>待审核文章</NavLink>, 'travel_examine_list'),
  ]), 
  getItem('城市数据管理', 'city', <EnvironmentOutlined />, [
    getItem(<NavLink to='/city/province/list'>省份列表</NavLink>, 'city_province_list'),
    getItem(<NavLink to='/city/list'>城市列表</NavLink>, 'city_list'),
  ]), 
  getItem('活动中心', 'activity', <AppstoreOutlined />, [
    getItem(<NavLink to='/activity/list'>活动列表</NavLink>, 'activity_list')
  ])
];



const Sidebar = () => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [openKeys, setOpenKeys] = useState<string[]>([]);

  useEffect(() => {
    let selectedKeyList = util.getSelectedKeysByPath();
    let selected = selectedKeyList[1];
    let opened = selectedKeyList[0];
    setSelectedKeys([selected]);
    setOpenKeys([opened]);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // SubMenu 展开/关闭的回调
  const onOpenChange =(openKeys: string[]) =>{
    setOpenKeys(openKeys);
  }

  return (
    <div className='sidebar'>
      <Menu selectedKeys={selectedKeys} openKeys={openKeys} mode='inline' items={items}  onOpenChange={onOpenChange}/>
    </div>
  );
};

export default Sidebar;
