import { Navigate, Outlet } from 'react-router-dom'
import { getAccessToken } from '../../shared/api/axios'
import { FULL_ROUTES } from '../../shared/constants/routes.ts'

export const RedirectIfAuth = () => {
  const accessToken = getAccessToken()

  if (accessToken) {
    return <Navigate to={FULL_ROUTES.PRIVATE.HOME} replace />
  }

  return <Outlet />
}
