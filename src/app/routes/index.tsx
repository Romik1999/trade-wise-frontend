import React from 'react';
import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from '../../pages/home';
import Layout from '../../shared/ui/layout/ui/Layout';
import Login from '../../pages/login';

const Router = createBrowserRouter([
  {
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
    ],
  },
]);

export default Router;
