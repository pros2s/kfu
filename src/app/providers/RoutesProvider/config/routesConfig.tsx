import { AuthPage } from '@/pages/AuthPage';
import { ForgottenPasPage } from '@/pages/ForgottenPas';
import { MainPage } from '@/pages/MainPage';
import { RegistrationPage } from '@/pages/RegistrationPage';
import {
  AppRouteProps,
  AppRoutes,
  getAuthRoute,
  getForgottenPassRoute,
  getMainRoute,
  getRegistrationRoute,
} from '@/shared/lib/routes/routes';

export const routesConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getMainRoute(),
    element: <MainPage />,
  },
  [AppRoutes.AUTH]: {
    path: getAuthRoute(),
    element: <AuthPage />,
  },
  [AppRoutes.FORGOTTENPAS]: {
    path: getForgottenPassRoute(),
    element: <ForgottenPasPage />,
  },
  [AppRoutes.REGISTRATION]: {
    path: getRegistrationRoute(),
    element: <RegistrationPage />,
  },
};
