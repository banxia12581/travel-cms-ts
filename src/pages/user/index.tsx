/**
 * @description 用户列表
 */
import React from 'react';
import { getUserList } from '@/api/user';
import List from '@/components/list';
import { USER_COLUMNS } from '@/constants/user';

export default function UserList() {
  const columns = USER_COLUMNS;

  return (
    <div>
      <List columns={columns} http={getUserList} />
    </div>
  );
}
