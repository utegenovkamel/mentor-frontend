import axios from 'axios';
import { errorCatch, getContentType } from '@/shared/api/api.helper';
import { AuthService } from '@/shared/services/auth/auth.service';
import {getAccessToken, removeFromStorage} from "@/shared/helpers";

const baseURL = import.meta.env.SERVER_URL || 'http://localhost:4200/api/'

export const axiosInstance = axios.create({
  baseURL,
  headers: getContentType(),
});

axiosInstance.interceptors.request.use(async (config) => {
  const accessToken = getAccessToken();

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      (error.response.status === 401 ||
        errorCatch(error) === 'jwt exprired' ||
        errorCatch(error) === 'jwt must be provided') &&
      error.config &&
      !error.config._retry
    ) {
      originalRequest._retry = true;

      try {
        await AuthService.getNewTokens();
        return axiosInstance.request(originalRequest);
      } catch (e) {
        if (errorCatch(e) === 'jwt exprired') {
          removeFromStorage();
        }
      }
    }
  }
);