import { axiosClassic } from '../../../shared/api/axios.ts'
import { API_ROUTES } from '../../../shared/constants/apiRoutes.ts'
import type { AxiosResponse } from 'axios'
import type { IIngredientsFilters, IIngredientsResponse } from '../../../widgets/ingredients-table/model/types.ts'

export const fetchIngredient = async() => {
  return await axiosClassic.get(API_ROUTES.ingredient)
}

export const fetchIngredients = async(params?: IIngredientsFilters): Promise<AxiosResponse<IIngredientsResponse>> => {
  return await axiosClassic.get<IIngredientsResponse>(API_ROUTES.ingredients, { params })
}
