import { AuthenticationSchema } from '../model/types/AuthenticationSchema';
import { rtkApi } from '@/shared/api/rtkApi';
import { User } from '@/entities/user';

const AuthenticationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    authenticate: build.mutation<User, AuthenticationSchema>({
      query: (args) => ({
        url: '/login',
        method: 'post',
        body: args,
      }),
    }),
  }),
});

export const useAuthenticate = AuthenticationApi.useAuthenticateMutation;
