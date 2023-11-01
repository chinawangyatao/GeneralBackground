import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './features/counterSlice';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';
import userSlice from '@/store/features/userSlice';

const store = configureStore({
  reducer: {
    counters: counterSlice,
    user: userSlice,
  },
});

// 二次封装 usereducer 解决 TS 类型错误
export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
