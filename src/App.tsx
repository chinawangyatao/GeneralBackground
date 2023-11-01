import React, { Suspense } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './store';
import Layout from './views/Layout';
import { BrowserRouter, HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';
import VmAuthRoute from '@/components/VmAuthRoute';

function App() {
  const counterStore = useAppSelector((store: any) => store.counters);
  const dispatch = useAppDispatch();
  return (
    <>
      <HashRouter>
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
      </HashRouter>
    </>
  );
}

export default App;
