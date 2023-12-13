import Cookies from 'js-cookie';
import { localStorageWrapper } from '~/shared/helpers';
import { User } from '~/shared/services/user/types.ts';
import { AuthResponse, Tokens } from '~/shared/services/auth/types.ts';

export const getAccessToken = () => Cookies.get('accessToken');

export const getRefreshToken = () => Cookies.get('refreshToken');

export const getUserFromStorage = () => {
  return localStorageWrapper.get<User>('user');
};

export const saveTokensStorage = (data: Tokens) => {
  Cookies.set('accessToken', data.accessToken);
  Cookies.set(' refreshToken', data.refreshToken);
};
export const removeFromStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  localStorageWrapper.remove('user');
};
export const saveToStorage = (data: AuthResponse) => {
  saveTokensStorage(data);
  localStorageWrapper.set('user', data.user);
};
