import { useSearchParams } from 'react-router-dom'

export const usePagination = ()=> {
  const [searchParams] = useSearchParams()
  const pageParam = searchParams.get('page')
  const page = pageParam ? parseInt(pageParam, 10) : 1

  const createPageUrl = (pageNumber: number | null) => {
    if (pageNumber === null) {
      return '#'
    }

    const newSearchParams = new URLSearchParams(searchParams)

    if (pageNumber === 1) {
      newSearchParams.delete('page')
    } else {
      newSearchParams.set('page', pageNumber.toString())
    }

    const queryString = newSearchParams.toString()
    return `${queryString ? `?${queryString}` : ''}`
  }

  return { createPageUrl, page }
}
