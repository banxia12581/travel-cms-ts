/**
 * @description 城市常量管理
 */
import { util } from '@/utils';

/** @name 城市列表  */
export const CITY_COLUMNS = [
  {
    title: '城市ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '城市',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '创建时间',
    dataIndex: 'creatAt',
    key: 'creatAt',
    render(val) {
      return util.dateFormatTransform(val);
    },
  },
];
