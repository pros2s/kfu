import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { rtkApi } from '@/shared/api/rtkApi';
import { UserSchema } from '@/entities/user';
import { AuthenticationSchema } from '@/features/Authentication';
import { RegistrationSchema } from '@/features/Registration';
import { FinishRegistrationSchema } from '@/features/FinishRegistration';

export interface StateSchema {
  // Required reducers
  user: UserSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Async reducers
  auth?: AuthenticationSchema;
  registration?: RegistrationSchema;
  finishRegistration?: FinishRegistrationSchema;
}

export type StateSchemaFields = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaFields, reducer: Reducer) => void;
  remove: (key: StateSchemaFields) => void;
}

export interface ReduxStoreWithManger extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkAPI {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkAPI;
  state: StateSchema;
}
