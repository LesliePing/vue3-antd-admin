import type { BaseResponse } from '@/utils/request';
import { request } from '@/utils/request';

/**
 * @description 登录
 * @param {LoginParams} data
 * @returns
 */
export function login(data: API.LoginParams) {
  return request<BaseResponse<API.LoginResult>>(
    {
      url: 'login',
      method: 'post',
      data,
    },
    {
      isGetDataDirectly: false,
    },
  );
}
/**
 * @description 获取 redis 缓存验证码
 */
export function getRedisVeriCode(data) {
  return request<BaseResponse<API.RedisCode>>(
    {
      url: 'rediscode',
      method: 'post',
      data,
    },
    {
      isGetDataDirectly: false,
    },
  );
}
/**
 * @description 获取验证码
 */
export function getImageCaptcha(params?: API.CaptchaParams) {
  return request<API.CaptchaResult>({
    url: 'captcha/img',
    method: 'get',
    params,
  });
}
