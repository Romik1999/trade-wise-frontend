import { Navigate, Outlet } from 'react-router-dom'
import Layout from '../../shared/ui/layout/ui/Layout'
import { getAccessToken } from '../../shared/api/axios'
import { FULL_ROUTES } from '../../shared/constants/routes.ts'

export const ProtectedRoutes = () => {
  const accessToken = getAccessToken()

  if (!accessToken) {
    return <Navigate to={FULL_ROUTES.PUBLIC.LOGIN} replace />
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
