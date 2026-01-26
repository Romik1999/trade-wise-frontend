import { createBrowserRouter } from 'react-router-dom'
import Home from '../../pages/home'
import Login from '../../pages/login'
import { ProtectedRoutes } from './ProtectedRoutes'
import { RedirectIfAuth } from './RedirectIfAuth'
import Register from '../../pages/register'
import { FULL_ROUTES } from '../../shared/constants/routes.ts'
import { Profile } from '../../pages/profile'
import { Settings } from '../../pages/settings'
import { Notifications } from '../../pages/notifications'
import { Products } from '../../pages/products'
import { IngredientCreate, IngredientDetail, IngredientList } from '../../pages/ingredients'

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
      },
      {
        path: FULL_ROUTES.PRIVATE.PROFILE,
        element: <Profile />
      },
      {
        path: FULL_ROUTES.PRIVATE.SETTINGS,
        element: <Settings />
      },
      {
        path: FULL_ROUTES.PRIVATE.NOTIFICATIONS,
        element: <Notifications />
      },
      {
        path: FULL_ROUTES.PRIVATE.COMPONENTS,
        element: <IngredientList />
      },
      {
        path: FULL_ROUTES.PRIVATE.COMPONENT,
        element: <IngredientDetail />
      },
      {
        path: FULL_ROUTES.PRIVATE.COMPONENT_CREATE,
        element: <IngredientCreate />
      },
      {
        path: FULL_ROUTES.PRIVATE.PRODUCTS,
        element: <Products />
      }
    ]
  },
  {
    path: '*',
    element: <div>404 not found!</div>
  }
])

export default Router
