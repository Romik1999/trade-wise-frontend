import { useSearchParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'

export const usePageSizeSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageSize = parseInt(searchParams.get('per_page') || '10', 10)

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newSize = event.target.value
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('per_page', newSize)
    newSearchParams.set('page', '1')
    setSearchParams(newSearchParams)
  }

  return { pageSize, handlePageSizeChange }
}
