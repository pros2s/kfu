import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import {
  FIO,
  RegistrationReason,
  RegistrationSchema,
  RegistrationType,
} from '../types/RegistrationSchema';

const initialState: RegistrationSchema = {
  fio: { name: '', surname: '' },
  isAcceptAgreement: false,
  login: '',
  registrationReasons: [],
  registrationType: 'e-mail',
};

export const RegistrationSlice = buildSlice({
  name: 'Registration',
  initialState,
  reducers: {
    setFIO: (state, { payload }: PayloadAction<FIO>) => {
      state.fio = payload;
    },
    setLogin: (state, { payload }: PayloadAction<string>) => {
      state.login = payload;
    },
    setIsAcceptAgreement: (state, { payload }: PayloadAction<boolean>) => {
      state.isAcceptAgreement = payload;
    },
    setRegistrationType: (
      state,
      { payload }: PayloadAction<RegistrationType>,
    ) => {
      state.registrationType = payload;
    },
    addRegistrationReason: (
      state,
      { payload }: PayloadAction<RegistrationReason>,
    ) => {
      state.registrationReasons = [...state.registrationReasons, payload];
    },
    removeRegistrationReason: (
      state,
      { payload }: PayloadAction<RegistrationReason>,
    ) => {
      state.registrationReasons = state.registrationReasons.filter(
        (reason) => reason !== payload,
      );
    },
  },
});

export const {
  actions: RegistrationActions,
  reducer: RegistrationReducer,
  useActions: useRegistrationActions,
} = RegistrationSlice;
