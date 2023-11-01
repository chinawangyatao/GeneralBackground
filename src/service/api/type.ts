export interface loginPropTypes {
  /**
   * 验证码
   */
  code: string;
  /**
   * 密码
   */
  password: string;
  /**
   * 用户名
   */
  username: string;
  /**
   * 验证码同时返回的UUID
   */
  uuid: string;
  [property: string]: any;
}

export interface userListPropTypes {
  pageNum?: string | number;
  pageSize?: string | number;
  phonenumber?: string;
  status?: string;
  userName?: string;
  [property: string]: any;
}

export interface roleListPropTypes {
  /**
   * 页码
   */
  pageNum: number;
  /**
   * 每页的数量
   */
  pageSize: number;
  /**
   * 权限字符
   */
  roleKey?: string;
  /**
   * 角色名称
   */
  roleName?: string;
  /**
   * 状态(状态也是加载字典得到的)
   */
  status?: string;
  [property: string]: any;
}
