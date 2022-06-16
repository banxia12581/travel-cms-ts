/**
 * @description 城市列表
 */
import React from 'react';
import { getCityList } from '@/api/city';
import List from '@/components/list';
import { CITY_COLUMNS } from '@/constants/city';

export default function CityList() {
  const columns = CITY_COLUMNS;

  return (
    <div>
      <List columns={columns} http={getCityList} />
    </div>
  );
}
