import VmRequest from '@/service';

export const code = () => {
  return VmRequest({
    url: '/code',
    method: 'GET',
  });
};

export const login = (data: any) => {
  return VmRequest({
    url: '/auth/login',
    method: 'POST',
    data: data,
  });
};

export const logOut = () => {
  return VmRequest({
    url: '/auth/logout',
    method: 'DELETE',
  });
};
