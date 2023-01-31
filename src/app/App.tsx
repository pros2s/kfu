import { memo, Suspense, useEffect } from 'react';

import { useGetInited, useUserActions } from '@/entities/user';
import { RoutesProvieder } from './providers/RoutesProvider';

const App = memo(() => {
  const inited = useGetInited();

  const { initUserData } = useUserActions();

  useEffect(() => {
    initUserData();
  }, [initUserData]);

  return (
    <div className='app'>
      <Suspense fallback=''>{inited && <RoutesProvieder />}</Suspense>
    </div>
  );
});

export default App;
