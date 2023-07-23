import { baseUrl } from './const';

/**
 * 发送Http请求工具
 * @param method 'GET'、'POST'
 * @param url '请求地址'
 * @param data '传输数据'
 */
// @ts-ignore
const request = async (method, url, data) => {
  let apiUrl = baseUrl + url;
  let options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: undefined
  };
  try {
    if (method.toUpperCase() === 'GET') {
      if (data){
        const params = new URLSearchParams(data);
        apiUrl += '?' + params.toString();
      }
    } else {
      console.log("进来了POST")
      // @ts-ignore
      options.body = JSON.stringify(data);
    }

    // console.log(options)
    const response = await fetch(apiUrl,options);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const responseData = await response.json();

    return responseData;
  } catch (error) {
    // 处理请求错误
    throw error;
  }
};

export default request;
