import { request } from '@/utils/request';
import menuApi from '@/core/permission/modules/test/menu';

/**
 * @description 获取菜单列表
 * @returns
 */
export function getMenuList() {
  return request<API.MenuListResult[]>({
    url: menuApi.list,
    method: 'get',
  });
}
