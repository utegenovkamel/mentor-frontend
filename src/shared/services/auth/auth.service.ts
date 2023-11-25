import axios from 'axios';
import { IAuthResponse, ILoginRequest, IRegisterRequest } from '@/shared/services/auth/auth.interface';
import { getContentType } from '@/shared/api/api.helper';
import { axiosInstance } from '@/shared/api';
import {getRefreshToken, saveToStorage} from "@/shared/helpers";

const domainName = 'auth';

export const AuthService = {
  async login(data: ILoginRequest) {
    const response = await axiosInstance.post<IAuthResponse>(
      `${domainName}/login`,
      data
    );

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response.data;
  },

  async register(data: IRegisterRequest) {
    const response = await axios.post<IAuthResponse>(`${domainName}/register`, data);

    if (response.data.accessToken) {
      saveToStorage(response.data);
    }

    return response.data;
  },

  async getNewTokens() {
    const refreshToken = getRefreshToken();

    const response = await axios.post<string, { data: IAuthResponse }>(
      process.env.SERVER_URL + `${domainName}/login/access-token`,
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
  },
};
