import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './FinishRegistration.module.scss';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';
import { FinishRegistrationReducer } from '../../model/slices/FinishRegistrationSlice';

interface FinishRegistrationProps {
  className?: string;
}

const reducers: ReducersList = {
  finishRegistration: FinishRegistrationReducer,
};

export const FinishRegistration = memo(
  ({ className }: FinishRegistrationProps) => (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(cls.FinishRegistration, [className])} />
    </DynamicReducerLoader>
  ),
);
