import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetIsAcceptAgreement, getIsAcceptAgreement] = buildSelector(
  (state: StateSchema) => state.registration?.isAcceptAgreement,
);
