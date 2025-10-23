import { createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/home'
import Login from '../../pages/login'
import { ProtectedRoutes } from './ProtectedRoutes'
import { RedirectIfAuth } from './RedirectIfAuth'
import Register from '../../pages/register'

export const PUBLIC_PAGES = {
  LOGIN: '/login',
  REGISTER: '/register'
}

export const PRIVATE_PAGES = {
  HOME: '/',
  PROFILE: '/profile',
  PRODUCTS: '/products',
  COMPONENTS: '/components',
  SETTINGS: '/settings'
}

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
      }
    ]
  },
  {
    path: '*',
    element: <div>404 not found!</div>
  }
])

export default Router
