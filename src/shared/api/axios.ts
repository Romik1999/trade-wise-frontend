import type { AxiosError, AxiosInstance, AxiosResponse, CreateAxiosDefaults, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import Cookies from 'js-cookie'
import { API_URL } from '../constants/constants.ts'
import { EnumTokens } from '../constants/Enums.ts'

export const getContentType = () => ({
  'Content-Type': 'application/json'
})

export const getAccessToken = () => {
  const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
  return accessToken || null
}

export const saveTokenStorage = (accessToken: string) => {
  Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
    domain: 'localhost',
    sameSite: 'strict',
    expires: 1
  })
}

export const removeFromStorage = () => {
  Cookies.remove(EnumTokens.ACCESS_TOKEN)
}

const axiosOptions: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: getContentType()
}

export const axiosClassic: AxiosInstance = axios.create(axiosOptions)

axiosClassic.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const accessToken = getAccessToken()

    if (accessToken && config.headers) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error)
  }
)

axiosClassic.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    return response
  },
  (error: AxiosError): Promise<never> => {
    return Promise.reject(error)
  }
)
