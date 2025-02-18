import axios, { CreateAxiosDefaults } from 'axios';
import Cookies from 'js-cookie';
import { EnumTokens } from '../../features/auth/model/useAuth';
import { API_URL } from '../../constants';

export const getContentType = () => ({
  'Content-Type': 'application/json',
});

export const errorCatch = (error: any): string => {
  const message = error?.response?.data?.message;

  return message
    ? typeof error.response.data.message === 'object'
      ? message[0]
      : message
    : error.message;
};

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN);
  return accessToken || null;
};

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1,
  });
};

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN);
};

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: getContentType(),
};

export const axiosClassic = axios.create(axiosOptions);

axiosClassic.interceptors.request.use((config) => {
  const accessToken = getAccessToken();

  if (config?.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`;

  return config;
});
