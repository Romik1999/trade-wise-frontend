import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE_PAGES } from './index';

export const RedirectIfAuth = () => {
  const cookies = { accessToken: '123456' };

  if (cookies.accessToken) return <Navigate to={PRIVATE_PAGES.HOME} replace />;

  return <Outlet />;
};
