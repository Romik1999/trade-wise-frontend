import { Navigate, Outlet } from 'react-router-dom';

export const RedirectIfAuth = () => {
  const [cookies] = { accessToken: '123123123' };

  if (cookies.accessToken) return <Navigate to="/" replace />;

  return <Outlet />;
};
