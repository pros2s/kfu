import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetLogin, getLogin] = buildSelector(
  (state: StateSchema) => state.registration?.login,
);
