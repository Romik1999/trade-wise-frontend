import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_PAGES } from './index';
import Layout from '../../shared/ui/layout/ui/Layout';
import { getAccessToken } from '../../shared/api/axios';

export const ProtectedRoutes = () => {
  const accessToken = getAccessToken();

  if (!accessToken) return <Navigate to={PUBLIC_PAGES.LOGIN} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
