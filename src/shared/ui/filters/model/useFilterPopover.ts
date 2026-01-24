import { useSearchParams } from 'react-router-dom'
import type { FilterConfig } from '../types'
import { useEffect, useState } from 'react'
import { formatValueForParams, getDefaultValue } from '../utils'

export const useFilterPopover = (filter: FilterConfig, handleClose: () => void, filterValue, setFilterValue) =>{
  const [searchParams, setSearchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const [localSelectedValue, setLocalSelectedValue] = useState(filterValue)

  const onSave = ()=>{
    Object.keys(localSelectedValue).forEach(key => {
      const val = localSelectedValue[key]

      if (val === undefined || val === null || val === '') {
        return
      }

      const formattedParams = formatValueForParams(key, val, filter.type)

      Object.entries(formattedParams).forEach(([paramKey, paramValue]) => {
        params.set(paramKey, paramValue)
      })
    })

    setFilterValue(localSelectedValue)
    setSearchParams(params, { replace: true })
    handleClose?.()
  }

  useEffect(() => {
    if (!filterValue){
      setLocalSelectedValue(()=>getDefaultValue(filter))
    }
  }, [searchParams, filterValue, filter])

  return { onSave, localSelectedValue, setLocalSelectedValue }
}
