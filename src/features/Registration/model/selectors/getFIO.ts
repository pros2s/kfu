import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetFIO, getFIO] = buildSelector(
  (state: StateSchema) => state.registration?.fio,
);
