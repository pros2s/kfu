import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetInited, getInited] = buildSelector(
  (state: StateSchema) => state.user._inited,
);
