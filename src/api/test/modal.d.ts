declare namespace API {
  /** 获取系统部门返回结果 */
  type MenuListResult = {
    createTime: string;
    updateTime: string;
    id: number;
    parentId: number;
    name: string;
    orderNum: number;
    keyPath?: number[];
  };
}
