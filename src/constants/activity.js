/**
 * @description 活动常量管理
 */
import { util } from '@/utils';

/** @name 活动列表  */
export const ACTIVITY_COLUMNS = [
  {
    title: '活动ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '活动名称',
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
