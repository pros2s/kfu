import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

interface MainPageProps {
  className?: string;
}

const MainPage = memo(({ className }: MainPageProps) => (
  <div className={classNames('', [className])}>main page</div>
));

export default MainPage;
