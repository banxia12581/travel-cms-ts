import { util } from '@/utils';

// 首页列表
export const getTravelList = function (requestData, successCallback) {
  const { page, size } = requestData;
  const total = 24;
  let numList = new Array(total);
  let list = [];
  for (var i = 0; i < numList.length; i++) {
    const index = i + 1;
    list[i] = {
      id: index,
      name: '文章' + index,
      creatAt: 1652172686000,
    };
  }
  let res = {
    total: total,
    list: [],
  };
  if (total !== 0) {
    res.list = util.getListByPageAndSize(total, page, size, list);
  }
  successCallback && successCallback(res);
};
