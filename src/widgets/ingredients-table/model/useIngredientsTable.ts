import { useQuery } from '@tanstack/react-query'
import { fetchIngredients } from '../../../entities/ingredient/api/ingredient.service.ts'
import type { IIngredientsResponse, IUseIngredientsTableReturn } from './types.ts'

export const useIngredientsTable = () : IUseIngredientsTableReturn => {

  const {
    isPending,
    isError,
    data,
    error
  } = useQuery({
    queryKey: ['ingredients-table'],
    queryFn: async(): Promise<IIngredientsResponse> => {
      const response = await fetchIngredients({})
      return response.data
    }
  })

  return {
    pagination: data?.pagination,
    isPending,
    isError,
    items: data?.data,
    error
  }
}
