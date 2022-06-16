/**
 * @description 省份列表
 */
import React from 'react';
import { getCityList } from '@/api/city';
import List from '@/components/list';
import { CITY_COLUMNS } from '@/constants/city';

export default function CityProvinceList() {
  const columns = CITY_COLUMNS;

  return (
    <div>
      <List columns={columns} http={getCityList} />
    </div>
  );
}
