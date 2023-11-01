import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { userInfo } from '@/service/api';

const initialState = {
  user: {},
  roles: [],
  permissions: [],
};

const userSlider = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserInfo.fulfilled, (state, action: any) => {
      state.user = action.payload.user;
      state.roles = action.payload.roles;
      state.permissions = action.payload.permissions;
    });
  },
});

export const getUserInfo = createAsyncThunk('getuserInfo', async () => {
  const res = await userInfo();
  return res;
});

export default userSlider.reducer;
