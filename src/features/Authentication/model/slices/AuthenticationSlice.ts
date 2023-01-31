import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { AuthenticationSchema } from '../types/AuthenticationSchema';

const initialState: AuthenticationSchema = {
  login: '',
  password: '',
};

export const AuthenticationSlice = buildSlice({
  name: 'Authentication',
  initialState,
  reducers: {
    setLogin: (state, { payload }: PayloadAction<string>) => {
      state.login = payload;
    },
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
  },
});

export const {
  actions: AuthenticationActions,
  reducer: AuthenticationReducer,
  useActions: useAuthenticationActions,
} = AuthenticationSlice;
