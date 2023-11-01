import Request from './request';
import { AxiosResponse } from 'axios';
import type { RequestConfig } from './request/types';
import { message } from 'antd';
import { getToken } from '@/utils';
import { BASEURL } from '@/service/static';

export interface VmResponse<T> {
  statusCode: number;
  desc: string;
  result: T;
}

// 重写返回类型
interface VmRequestConfig<T, R> extends RequestConfig<VmResponse<R>> {
  data?: T;
}

const request = new Request({
  // baseURL: 'http://6fjjyf.natappfree.cc',
  baseURL: BASEURL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: config => {
      if (getToken('access_token')) {
        config.headers.Authorization = 'Bearer ' + getToken('access_token');
      } else {
        // 解决token意外消失的问题
        message.error({
          content: '登录过期,正在跳转登录页',
        });
        window.location.hash = '/login';
      }
      return config;
    },
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      // 解决页面长时间停留 token 过期的问题
      if (result.data.code === 401) {
        message.error({
          content: '登录过期,正在跳转登录页',
        });
        window.location.hash = '/login';
      }
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {VmRequestConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const VmRequest = <D = any, T = any>(config: VmRequestConfig<D, T>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return request.request<VmResponse<T>>(config);
};
// // 取消请求
// export const cancelRequest = (url: string | string[]) => {
//   return request.cancelRequest(url)
// }
// // 取消全部请求
// export const cancelAllRequest = () => {
//   return request.cancelAllRequest()
// }

export default VmRequest;
