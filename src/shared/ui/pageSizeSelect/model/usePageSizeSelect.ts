import { useSearchParams } from 'react-router-dom'
import type { ChangeEvent } from 'react'

export const usePageSizeSelect = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const pageSize = parseInt(searchParams.get('pageSize') || '10', 10)

  const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newSize = event.target.value
    const newSearchParams = new URLSearchParams(searchParams)
    newSearchParams.set('pageSize', newSize)
    newSearchParams.set('page', '1')
    setSearchParams(newSearchParams)
  }

  return { pageSize, handlePageSizeChange }
}
