import React, { Suspense } from 'react';
import './App.css';
import { useAppDispatch, useAppReducer } from './store';
import Layout from './views/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './views/Login';
import Register from './views/Register';
import NotFound from './views/NotFound';

function App() {
  const counterStore = useAppReducer((store: any) => store.counters);
  // console.log(counterStore);
  const dispatch = useAppDispatch();
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<span>loading...</span>}>
          <Routes>
            <Route path={'/*'} element={<Layout />} />
            <Route path={'/login'} element={<Login />} />
            <Route path={'/Register'} element={<Register />} />
            <Route path={'/404'} element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
