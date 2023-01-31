import { rtkApi } from '@/shared/api/rtkApi';
import { RegistrationSchema } from '../model/types/RegistrationSchema';

const RegistrationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    // returns void??
    registrate: build.mutation<void, RegistrationSchema>({
      query: (args) => ({
        url: '/registration',
        method: 'post',
        body: args,
      }),
    }),
  }),
});

export const useRegistrate = RegistrationApi.useRegistrateMutation;
