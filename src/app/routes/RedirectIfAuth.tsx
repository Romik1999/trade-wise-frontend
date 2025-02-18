import { Navigate, Outlet } from 'react-router-dom';
import { PRIVATE_PAGES } from './index';
import { getAccessToken } from '../../shared/api/axios';

export const RedirectIfAuth = () => {
  const accessToken = getAccessToken();

  if (accessToken) return <Navigate to={PRIVATE_PAGES.HOME} replace />;

  return <Outlet />;
};
