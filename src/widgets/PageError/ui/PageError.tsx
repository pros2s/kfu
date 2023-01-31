import { memo } from 'react';

import { Text } from '@/shared/ui/Text';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => (
  <Text title='Page error' className={className} />
));
