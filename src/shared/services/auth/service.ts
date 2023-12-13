import axios from 'axios';
import {AuthResponse, LoginRequest, RegisterRequest} from '~/shared/services/auth/types.ts';
import {getContentType} from '~/shared/api/api.helper';
import {axiosInstance} from '~/shared/api';
import {getRefreshToken, saveToStorage} from "~/shared/helpers";
import {createEffect} from "effector";

const domainName = 'auth';

export const loginFx = createEffect(async (data: LoginRequest) => {
  const response = await axiosInstance.post<AuthResponse>(
    `${domainName}/login`,
    data
  );

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response.data;
})

export const registerFx = async (data: RegisterRequest) => {
  const response = await axios.post<AuthResponse>(`${domainName}/register`, data);

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response.data;
}

export const getNewTokensFx = async () => {
  const refreshToken = getRefreshToken();

  const response = await axios.post<string, { data: AuthResponse }>(
    import.meta.env.SERVER_URL + `${domainName}/login/access-token`,
    {
      refreshToken,
    },
    {
      headers: getContentType(),
    }
  );

  if (response.data.accessToken) {
    saveToStorage(response.data);
  }

  return response.data;
}

export const authService = {loginFx, registerFx, getNewTokensFx}