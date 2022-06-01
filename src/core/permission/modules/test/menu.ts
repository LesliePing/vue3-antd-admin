export const menuApi = {
  /** 获取菜单列表 */
  list: '/sys/menu/list',
} as const;

export const values = Object.values(menuApi);

export type menuPermis = typeof values[number];

export default menuApi;
