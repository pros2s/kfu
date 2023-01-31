import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Authentication } from '@/features/Authentication';

interface AuthPageProps {
  className?: string;
}

const AuthPage = memo(({ className }: AuthPageProps) => (
  <div className={classNames('', [className])}>
    <Authentication />
  </div>
));

export default AuthPage;
