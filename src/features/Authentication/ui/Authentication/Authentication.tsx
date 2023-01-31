import { memo, useCallback } from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Flex } from '@/shared/ui/Flex';
import {
  AuthenticationReducer,
  useAuthenticationActions,
} from '../../model/slices/AuthenticationSlice';

import { Input } from '@/shared/ui/Input/Input';
import { useGetLogin } from '../../model/selectors/getLogin';
import { useGetPassword } from '../../model/selectors/getPassword';
import { useAuthenticate } from '../../api/AuthenticationApi';
import { useUserActions } from '@/entities/user';
import { Loader } from '@/shared/ui/Loader';
import {
  getForgottenPassRoute,
  getMainRoute,
} from '@/shared/lib/routes/routes';
import {
  ReducersList,
  DynamicReducerLoader,
} from '@/shared/lib/components/DynamicReducerLoader/DynamicReducerLoader';

interface AuthenticationProps {
  className?: string;
}

const reducers: ReducersList = {
  auth: AuthenticationReducer,
};

export const Authentication = memo(({ className }: AuthenticationProps) => {
  const navigate = useNavigate();

  const { setLogin, setPassword } = useAuthenticationActions();
  const { setUserData } = useUserActions();

  const [authenticate, { isLoading }] = useAuthenticate();

  const login = useGetLogin();
  const password = useGetPassword();

  const loginHandler = useCallback(
    (value: string) => {
      setLogin(value);
    },
    [setLogin],
  );

  const passwordHandler = useCallback(
    (value: string) => {
      setPassword(value);
    },
    [setPassword],
  );

  const submitHandler = useCallback(async () => {
    try {
      const result = await authenticate({ login, password });
      if ('data' in result) {
        setUserData(result.data);
        navigate(getMainRoute());
      }
    } catch (err) {
      throw new Error(err as string);
    }
  }, [authenticate, login, navigate, password, setUserData]);

  return (
    <DynamicReducerLoader reducers={reducers} removeAfterUnmount>
      <Flex
        className={classNames('', [className])}
        role='form'
        direction='column'
      >
        <Input placeholder='Логин' onChange={loginHandler} value={login} />
        <Input
          placeholder='Пароль'
          onChange={passwordHandler}
          value={password}
          type='password'
        />
        <Flex>
          <button type='submit' onClick={submitHandler}>
            {isLoading ? <Loader size={20} /> : 'Войти'}
          </button>
          <Link to={getForgottenPassRoute()}>Забыли пароль?</Link>
        </Flex>
      </Flex>
    </DynamicReducerLoader>
  );
});
