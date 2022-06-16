/**
 * @description 活动列表
 */
import React from 'react';
import { getActivityList } from '@/api/activity';
import List from '@/components/list';
import { ACTIVITY_COLUMNS } from '@/constants/activity';

export default function ActivityList() {
  const columns = ACTIVITY_COLUMNS;

  return (
    <div>
      <List columns={columns} http={getActivityList} />
    </div>
  );
}
