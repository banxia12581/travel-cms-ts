/**
 * @description 公共头部
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { COMMON_SYSTEM_INFO } from '@/constants/common';
import './index.less';

function Header() {
  return (
    <div className='header'>
      <Link to='/' className='logo'>
        <div className='logo-title'>说走就走</div>
      </Link>
      <div className='right'>
        <img className='avatar' src={COMMON_SYSTEM_INFO.avatar} alt='avatar' />
      </div>
    </div>
  );
}
export default Header;
