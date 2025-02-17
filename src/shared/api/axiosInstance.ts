import axios from "axios";
import { getCookie } from './cookies';
import * as process from 'node:process';

export const api = axios.create({
  baseURL: process.env.SERVER_URL,
});

// Добавляем Bearer Token к каждому запросу
api.interceptors.request.use((config) => {
  const token = getCookie("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
