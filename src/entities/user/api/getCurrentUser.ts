import { axiosClassic } from '../../../shared/api/axios.ts'
import { API_ROUTES } from '../../../shared/constants/apiRoutes.ts'

export const fetchCurrentUser = async() => {
  return await axiosClassic.get(API_ROUTES.currentUser)
}
