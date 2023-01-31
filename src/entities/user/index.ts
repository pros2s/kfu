export {
  userActions,
  userReducer,
  useUserActions,
} from './model/slice/UserSlice';
export type { UserSchema, User } from './model/types/UserSchema';
export {
  getUserAuthData,
  useGetUserAuthData,
} from './model/selectors/getUserAuthData';
export { useGetInited } from './model/selectors/getInited';
