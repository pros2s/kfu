import { rtkApi } from '@/shared/api/rtkApi';
import { FinishRegistrationSchema } from '../model/types/FinishRegistrationSchema';

const FinishRegistrationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    finishRegistration: build.mutation<void, FinishRegistrationSchema>({
      query: (args) => ({
        url: '/finish-registration',
        method: 'post',
        body: args,
      }),
    }),
  }),
});

export const useFinishRegistration =
  FinishRegistrationApi.useFinishRegistrationMutation;
