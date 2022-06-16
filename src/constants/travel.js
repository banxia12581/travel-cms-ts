/**
 * @description 文章常量管理
 */
import { util } from '@/utils';

/** @name 文章列表  */
export const TRAVEL_COLUMNS = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '标题',
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
