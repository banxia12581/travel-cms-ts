/**
 * @description 文章列表
 */
import React from 'react';
import { getTravelList } from '@/api/travel';
import List from '@/components/list';
import { TRAVEL_COLUMNS } from '@/constants/travel';

export default function TravelList() {
  const columns = TRAVEL_COLUMNS;

  return (
    <div>
      <List columns={columns} http={getTravelList} />
    </div>
  );
}
