import { axiosClassic } from './../../../shared/api/axios'
import type { IAuthRequest, IAuthResponse } from '../model/types.ts'
import { API_ROUTES } from '../../../shared/constants/apiRoutes.ts'

export const AuthApi = {
  async login(data: IAuthRequest) {
    return axiosClassic.post<IAuthResponse>(API_ROUTES.login, data)
  }
}
