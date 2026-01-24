import { useQuery } from '@tanstack/react-query'
import { fetchIngredients } from '../../../entities/ingredient/api/ingredient.service.ts'
import type { IIngredientsResponse, IUseIngredientsTableReturn } from './types.ts'
import { useSearchParams } from 'react-router-dom'
import { INGREDIENTS_QUERIES } from '../config/ingredientsQueries.ts'
import { useMemo } from 'react'

export const useSearchParamsFilters = () => {
  const [searchParams] = useSearchParams()

  return useMemo(() => {
    const result: Record<string, string> = {}

    INGREDIENTS_QUERIES.forEach(param => {
      const value = searchParams.get(param)
      if (value !== null) {
        result[param] = value
      }
    })

    return result
  }, [searchParams])
}

export const useIngredientsTable = () : IUseIngredientsTableReturn => {
  const ingredientsQueries = useSearchParamsFilters()

  const {
    isPending,
    isError,
    data,
    error
  } = useQuery({
    queryKey: ['ingredients-table', ingredientsQueries],
    queryFn: async(): Promise<IIngredientsResponse> => {
      const response = await fetchIngredients(ingredientsQueries)
      return response.data
    }
  })

  return {
    pagination: data?.pagination,
    isLoading: isPending,
    isError,
    items: data?.data ?? [],
    error
  }
}
