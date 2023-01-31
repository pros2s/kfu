import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetRegistrationReasons, getRegistrationReasons] =
  buildSelector(
    (state: StateSchema) => state.registration?.registrationReasons,
  );
