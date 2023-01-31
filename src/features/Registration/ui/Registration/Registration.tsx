import { memo } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';
import {
  DynamicReducerLoader,
  ReducersList,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

import { RegistrationReducer } from '../../model/slices/RegistrationSlice';

interface RegistrationProps {
  className?: string;
}

const reducers: ReducersList = {
  registration: RegistrationReducer,
};

export const Registration = memo(({ className }: RegistrationProps) => (
  <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames('', [className])} />
  </DynamicReducerLoader>
));
