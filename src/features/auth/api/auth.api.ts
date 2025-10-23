import { axiosClassic } from './../../../shared/api/axios'
import type { IAuthRequest, IAuthResponse } from '../model/types.ts'

export const AuthApi = {
  async login(data: IAuthRequest) {
    return axiosClassic.post<IAuthResponse>('/auth/login', data)
  }
}
