// 首页列表
const getHomeData = function (requestData, successCallback) {
  let data = [
    {
      title: '用户数量',
      value: 20,
    },
    {
      title: '新增用户',
      value: 3,
    },
    {
      title: '文章数量',
      value: 60,
    },
    {
      title: '新增文章',
      value: 5,
    },
  ];
  successCallback && successCallback(data);
};

const config = {
  getHomeData,
};

module.exports = config;
