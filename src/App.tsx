import React, { Suspense } from 'react';
import './App.css';
import { useAppDispatch, useAppReducer } from './store';
import Layout from './views/Layout';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import VmAuthRoute from '@/components/VmAuthRoute';

function App() {
  const counterStore = useAppReducer((store: any) => store.counters);
  const dispatch = useAppDispatch();
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<span>loading...</span>}>
          <Routes>
            <Route
              path={'/*'}
              element={
                <VmAuthRoute>
                  <Layout />
                </VmAuthRoute>
              }
            />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/Register'} element={<Register />} />
            <Route path={'/404'} element={<NotFound />} />
            <Route path={'/'} element={<Navigate to={'/dashboard'} />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
