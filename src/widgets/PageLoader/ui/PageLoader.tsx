import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './PageLoader.module.scss';
import { Flex } from '@/shared/ui/Flex';
import { Loader } from '@/shared/ui/Loader';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = memo(({ className }: PageLoaderProps) => (
  <Flex
    align='center'
    justify='center'
    className={classNames(cls.PageLoader, [className])}
  >
    <Loader />
  </Flex>
));
