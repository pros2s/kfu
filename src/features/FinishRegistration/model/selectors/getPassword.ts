import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetPassword, getPassword] = buildSelector(
  (state: StateSchema) => state.finishRegistration?.password,
);
