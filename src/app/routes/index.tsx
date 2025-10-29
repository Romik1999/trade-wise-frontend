import { createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/home'
import Login from '../../pages/login'
import { ProtectedRoutes } from './ProtectedRoutes'
import { RedirectIfAuth } from './RedirectIfAuth'
import Register from '../../pages/register'
import { FULL_ROUTES } from '../../shared/constants/routes.ts'

const Router = createBrowserRouter([
  {
    element: <RedirectIfAuth />,
    children: [
      {
        path: FULL_ROUTES.PUBLIC.LOGIN,
        element: <Login />
      },
      {
        path: FULL_ROUTES.PUBLIC.REGISTER,
        element: <Register />
      }
    ]
  },
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: FULL_ROUTES.PRIVATE.HOME,
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
