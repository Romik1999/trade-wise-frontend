import { useSearchParams } from 'react-router-dom'
import { type ChangeEvent, useCallback, useMemo, useState } from 'react'
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import { debounce } from 'lodash'

export const useSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const currentSearchParam = searchParams.get('search') || ''
  const [searchValue, setSearchValue] = useState(currentSearchParam)
  const [isTyping, setIsTyping] = useState(false)

  const updateSearchParam = useCallback((value: string) => {
    setIsTyping(false)
    const newSearchParams = new URLSearchParams(searchParams)
    if (value.trim()) {
      newSearchParams.set('search', value.trim())
    } else {
      newSearchParams.delete('search')
    }
    newSearchParams.delete('page')

    setSearchParams(newSearchParams)
  }, [searchParams, setSearchParams])

  const debouncedUpdate = useMemo(
    () => debounce(updateSearchParam, 500),
    [updateSearchParam]
  )

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchValue(value)
    setIsTyping(true)
    debouncedUpdate(value)
  }

  const handleClear = () => {
    setSearchValue('')
    setIsTyping(false)
    updateSearchParam('')
    debouncedUpdate.cancel()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      debouncedUpdate.cancel()
      updateSearchParam(searchValue)
    }
  }
  return { searchValue, isTyping, handleChange, handleClear, handleKeyDown }
}
