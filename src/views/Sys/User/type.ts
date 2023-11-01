export interface userListPropTypes {
  code: number;
  msg: string;
  rows: RowPropTypes[];
  total: number;
  [property: string]: any;
}

export interface RowPropTypes {
  /**
   * 是否为管理员
   */
  admin?: boolean;
  /**
   * 头像
   */
  avatar?: string;
  /**
   * 创建人
   */
  createBy?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 是否删除(0正常  2删 除)
   */
  delFlag?: string;
  dept?: Dept;
  /**
   * 部门ID
   */
  deptId?: number;
  /**
   * 邮箱
   */
  email?: string;
  /**
   * 最后一次登录时间
   */
  loginDate?: string;
  /**
   * 最后一次登录IP
   */
  loginIp?: string;
  /**
   * 昵称
   */
  nickName?: string;
  /**
   * 密码
   */
  password?: null;
  /**
   * 手机号
   */
  phonenumber?: string;
  postIds?: null;
  /**
   * 备注
   */
  remark?: string;
  roleId?: null;
  roleIds?: null;
  roles?: string[];
  /**
   * 性别
   */
  sex?: string;
  /**
   * 状态(0正常  1锁定)
   */
  status?: string;
  /**
   * 更新人
   */
  updateBy?: null;
  /**
   * 更新时间
   */
  updateTime?: null;
  /**
   * 用户id
   */
  userId?: number;
  /**
   * 用户名
   */
  userName?: string;
  [property: string]: any;
}

export interface Dept {
  ancestors: null;
  children: string[];
  createBy: null;
  createTime: null;
  delFlag: null;
  deptId: number;
  deptName: string;
  email: null;
  leader: string;
  orderNum: null;
  parentId: null;
  parentName: null;
  phone: null;
  remark: null;
  status: null;
  updateBy: null;
  updateTime: null;
  [property: string]: any;
}

export interface ColumnsDataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
  [property: string]: any;
}
