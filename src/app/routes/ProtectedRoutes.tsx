import { Navigate, Outlet } from 'react-router-dom';
import { PUBLIC_PAGES } from './index';
import Layout from '../../shared/ui/layout/ui/Layout';

export const ProtectedRoutes = () => {
  const cookies = { accessToken: '123456' };

  if (!cookies.accessToken) return <Navigate to={PUBLIC_PAGES.LOGIN} replace />;

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};
