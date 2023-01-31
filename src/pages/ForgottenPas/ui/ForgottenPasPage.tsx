import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface ForgottenPasPageProps {
  className?: string;
}

const ForgottenPasPage = memo(({ className }: ForgottenPasPageProps) => (
  <div className={classNames('', [className])}>forgotten</div>
));

export default ForgottenPasPage;
