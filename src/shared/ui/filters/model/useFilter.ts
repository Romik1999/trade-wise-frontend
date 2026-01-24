import type React from 'react'
import { useState } from 'react'
import type { FilterConfig } from '../types'
import { useSearchParams } from 'react-router-dom'
import { getDefaultValue } from '../utils'

export const useFilter = (filter: FilterConfig) =>{
  const [searchParams] = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
  const [filterValue, setFilterValue] = useState(()=> getDefaultValue(filter, params))
  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return { id, open, anchorEl, filterValue, setFilterValue, handleClick, handleClose }
}
