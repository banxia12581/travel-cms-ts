import moment from 'moment';
import { routerConfig } from '@/router/config';
// 获取用户信息
const getUserInfo = () => {
  let userInfo = sessionStorage.getItem('userInfo');
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return null;
};

// 保存用户信息
const saveUserInfo = userInfo => {
  if (userInfo) {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
  }
};

/**
 *  设置cookie
 * @param {number} mobile 手机号
 * @param {number} pwd 密码
 * @param {number} exdays 永久缓存的天数
 * @return {void} 无
 */
const setCookie = (mobile, pwd, exdays) => {
  // 获取时间
  let exdate = new Date();
  // 保存的天数
  let time = exdate.getTime() + 24 * 60 * 60 * 1000 * exdays;
  let data = mobile
    ? {
        mobile,
        pwd,
      }
    : null;
  let obj = {
    data: data,
    expire: exdays > -1 ? time : null, // 过期时间
  };
  localStorage.setItem('userCookie', JSON.stringify(obj));
};

/**
 *  获取cookie的值
 * @param {void} 无
 * @return {any} 获取的cookie的值
 */
const getCookie = () => {
  let userCookie = localStorage.getItem('userCookie');
  if (!userCookie) return {};
  let userCookieData = JSON.parse(userCookie);
  // 与过期时间比较
  if (new Date().getTime() > userCookieData.expire) {
    // 过期删除数据
    localStorage.removeItem('userCookie');
    return {};
  } else {
    return userCookieData.data;
  }
};

// 判断是否是手机号
const isPhoneNumber = tel => {
  var reg = /^[1][0,2,3,4,5,6,7,8,9][0-9]{9}$/;
  return reg.test(tel);
};

/**
 * 时间戳转换成日期展示形式 不存在展示空
 * @param {Date} val 需要初始化的日期
 * @param {boolean} hmsFlag 是否展示时分秒 默认是
 * @return {void} 初始化之后的日期
 */
const dateFormatTransform = (val, hmsFlag = true) => {
  const formatStr = hmsFlag ? 'YYYY-MM-DD HH:mm:ss' : 'YYYY-MM-DD';
  return val ? moment(val).format(formatStr) : '';
};
/**
 * 获取当前页的数组
 * @param {number} total 默认0
 * @param {number} page 默认1
 * @param {number} size  默认20
 * @param {Array} list 初始数组
 * @return {Array} 最终的数组
 */
const getListByPageAndSize = (total = 0, page = 1, size = 20, list = []) => {
  // 当前总页数
  let pageTotal = Math.ceil(total / size);
  let nestList = []; // 按页嵌套数组
  let currList = []; // 当前页的数组
  if (total < size) {
    currList = [].concat(list);
  } else {
    for (var i = 0, j = list.length; i < j; i += size) {
      nestList.push(list.slice(i, i + size));
    }
    if (total !== 0 && page <= pageTotal) {
      currList = nestList[page - 1];
    }
  }
  return currList;
};
/**
 * 根据pathname获取当前点亮的menu菜单
 */
const getSelectedKeysByPath = () => {
  let selectedKeys = [];
  const pathname = window.location.pathname;
  let pathList = routerConfig.filter(router => router.path === pathname);
  let pathItem = {};
  if (pathList.length !== 0) {
    pathItem = pathList[0];
    selectedKeys = [pathItem.openKeys, pathItem.selectedKeys];
  }
  return selectedKeys;
};

export default {
  getUserInfo,
  saveUserInfo,
  setCookie,
  getCookie,
  isPhoneNumber,
  dateFormatTransform,
  getListByPageAndSize,
  getSelectedKeysByPath,
};
