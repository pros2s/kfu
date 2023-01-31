import { buildSelector } from '@/shared/lib/store';
import { StateSchema } from '@/app/providers/StoreProvider';

export const [useGetLogin, getLogin] = buildSelector(
  (state: StateSchema) => state.auth?.login || '',
);
