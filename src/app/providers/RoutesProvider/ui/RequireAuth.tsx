import { Navigate, useLocation } from 'react-router-dom';
import { useGetUserAuthData } from '@/entities/user';
import { getAuthRoute } from '@/shared/lib/routes/routes';

interface RequireAuthProps {
  children: JSX.Element;
}

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const auth = useGetUserAuthData();
  const location = useLocation();

  if (!auth.authData) {
    return <Navigate to={getAuthRoute()} state={{ from: location }} replace />;
  }

  return children;
};
