import { useQuery } from '@tanstack/react-query'
import { fetchIngredients } from '../../../entities/ingredient/api/ingredient.service.ts'
import type { IIngredientsResponse, IUseIngredientsTableReturn } from './types.ts'
import { useSearchParams } from 'react-router-dom'

export const useIngredientsTable = () : IUseIngredientsTableReturn => {
  const [searchParams] = useSearchParams()
  const page = searchParams.get('page') ?? undefined
  const pageSize = searchParams.get('pageSize') ?? undefined
  const sortBy = searchParams.get('sort_by') ?? undefined
  const sortDirection = searchParams.get('direction') ?? undefined

  const {
    isPending,
    isError,
    data,
    error
  } = useQuery({
    queryKey: ['ingredients-table', page, pageSize, sortBy, sortDirection],
    queryFn: async(): Promise<IIngredientsResponse> => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const response = await fetchIngredients({ page: page, per_page: pageSize, sort_by: sortBy, direction: sortDirection })
      return response.data
    }
  })

  return {
    pagination: data?.pagination,
    isLoading: isPending,
    isError,
    items: data?.data,
    error
  }
}
