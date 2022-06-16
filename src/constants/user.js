/**
 * @description 用户常量管理
 */
import { util } from '@/utils';

/** @name 用户列表  */
export const USER_COLUMNS = [
  {
    title: '用户ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: '姓名',
    dataIndex: 'userName',
    key: 'userName',
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
