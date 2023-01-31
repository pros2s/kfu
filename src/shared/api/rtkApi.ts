import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { StateSchema } from '@/app/providers/StoreProvider';

export const rtkApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as StateSchema).user.authData?.token;

      if (token) {
        headers.set('authentication', `Token ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
