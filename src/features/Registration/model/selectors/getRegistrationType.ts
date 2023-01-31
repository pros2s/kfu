import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetRegistrationType, getRegistrationType] = buildSelector(
  (state: StateSchema) => state.registration?.registrationType,
);
