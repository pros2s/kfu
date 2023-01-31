import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
};

export enum AppRoutes {
  MAIN = '/',
  AUTH = 'auth',
  FORGOTTENPAS = 'forgotten-pass',
  REGISTRATION = 'registration',
}

export const getMainRoute = () => '/';
export const getAuthRoute = () => '/auth';
export const getForgottenPassRoute = () => `/forgottenpas`;
export const getRegistrationRoute = () => `/registration`;
