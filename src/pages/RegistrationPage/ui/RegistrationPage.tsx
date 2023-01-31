import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Registration } from '@/features/Registration';

interface RegistrationPageProps {
  className?: string;
}

const RegistrationPage = memo(({ className }: RegistrationPageProps) => (
  <div className={classNames('', [className])}>
    <Registration />
  </div>
));

export default RegistrationPage;
