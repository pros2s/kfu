import { PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/UserSchema';
import { buildSlice } from '@/shared/lib/store';

const initialState: UserSchema = {
  authData: undefined,
  _inited: false,
};

const UserSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData(state, { payload }: PayloadAction<User>) {
      state.authData = payload;
    },
    initUserData(state) {
      state._inited = true;
    },
    logout(state) {
      state.authData = undefined;
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
  useActions: useUserActions,
} = UserSlice;
