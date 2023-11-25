import Cookies from 'js-cookie';
import { localStorageWrapper } from '@/shared/helpers';
import { UserDto } from '@/shared/services/user/user.interface';
import { IAuthResponse, ITokens } from '@/shared/services/auth/auth.interface';

export const getAccessToken = () => Cookies.get('accessToken');

export const getRefreshToken = () => Cookies.get('refreshToken');

export const getUserFromStorage = () => {
  return localStorageWrapper.get<UserDto>('user');
};

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.accessToken);
  Cookies.set(' refreshToken', data.refreshToken);
};
export const removeFromStorage = () => {
  Cookies.remove('accessToken');
  Cookies.remove('refreshToken');
  localStorageWrapper.remove('user');
};
export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data);
  localStorageWrapper.set('user', data.user);
};
