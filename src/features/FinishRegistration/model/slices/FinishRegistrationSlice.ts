import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { FinishRegistrationSchema } from '../types/FinishRegistrationSchema';

const initialState: FinishRegistrationSchema = {
  password: '',
  repeatPassword: '',
};

export const FinishRegistrationSlice = buildSlice({
  name: 'FinishRegistration',
  initialState,
  reducers: {
    setPassword: (state, { payload }: PayloadAction<string>) => {
      state.password = payload;
    },
    setRepeatPassword: (state, { payload }: PayloadAction<string>) => {
      state.repeatPassword = payload;
    },
  },
});

export const {
  actions: FinishRegistrationActions,
  reducer: FinishRegistrationReducer,
  useActions: useFinishRegistrationActions,
} = FinishRegistrationSlice;
