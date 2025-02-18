import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/home';
import Login from '../../pages/login';
import Profile from '../../pages/profile';
import Register from '../../pages/register';
import About from '../../pages/about';
import { ProtectedRoutes } from './ProtectedRoutes';
import { RedirectIfAuth } from './RedirectIfAuth';
import Products from '../../pages/products';
import Components from '../../pages/components';

export const PUBLIC_PAGES = {
  LOGIN: '/login',
  REGISTER: '/register',
  ABOUT: '/about',
};

export const PRIVATE_PAGES = {
  HOME: '/',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  COMPONENTS: '/components',
};

const Router = createBrowserRouter([
  {
    element: <RedirectIfAuth />,
    children: [
      {
        path: PUBLIC_PAGES.LOGIN,
        element: <Login />
      },
      {
        path: PUBLIC_PAGES.REGISTER,
        element: <Register />
      }
    ]
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: PRIVATE_PAGES.HOME,
        element: <Home />
      },
      {
        path: PRIVATE_PAGES.PROFILE,
        element: <Profile />
      },
      {
        path: PRIVATE_PAGES.PRODUCTS,
        element: <Products />
      },
      {
        path: PRIVATE_PAGES.COMPONENTS,
        element: <Components />
      },
    ]
  },
  {
    path: PUBLIC_PAGES.ABOUT,
    element: <About />
  },
  {
    path: '*',
    element: <div>404 not found!</div>
  }
]);

export default Router;
