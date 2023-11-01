import VmRequest from '@/service';
import { loginPropTypes, roleListPropTypes, userListPropTypes } from '@/service/api/type';

export const code = () => {
  return VmRequest({
    url: '/code',
    method: 'GET',
  });
};

export const login = (data: loginPropTypes) => {
  return VmRequest({
    url: '/auth/login',
    method: 'POST',
    data,
  });
};

export const logOut = () => {
  return VmRequest({
    url: '/auth/logout',
    method: 'DELETE',
  });
};

// 获取用户信息
export const userInfo = () => {
  return VmRequest({
    url: '/system/user/getInfo',
    method: 'GET',
  });
};
//获取部门的树结构
export const userInfoTree = () => {
  return VmRequest({
    url: '/system/user/deptTree',
    method: 'GET',
  });
};

// 查询用户列表
export const userList = (data?: userListPropTypes) => {
  return VmRequest({
    url: '/system/user/list',
    method: 'GET',
    data,
  });
};

// 查询用户列表
export const roleList = (data: roleListPropTypes) => {
  return VmRequest({
    url: '/system/role/list',
    method: 'GET',
    data,
  });
};
