function httpRequest(url, requestData, successCallback) {
  let res = url(requestData);
  successCallback && successCallback(res);
}

export default {
  http: httpRequest,
};
