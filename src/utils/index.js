// 从localstorage 中取 access_token
export const getToken = key => {
  return localStorage.getItem(key);
};

export const removeToken = key => {
  return localStorage.removeItem(key);
};
