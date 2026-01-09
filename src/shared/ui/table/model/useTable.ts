import { useSearchParams } from 'react-router-dom'
import { useMemo } from 'react'
import { getCoreRowModel, type SortingState, type Updater, useReactTable } from '@tanstack/react-table'
import { defaultSortDirection, defaultSortField } from '../consts'
import type { ITableProps } from '../types/table.types.ts'

export const useTable = <T, > (
  items: ITableProps<T>['items'],
  columnsConfig: ITableProps<T>['columnsConfig']
)=> {
  const [searchParams, setSearchParams] = useSearchParams()

  const sortBy = searchParams.get('sort_by') || defaultSortField
  const sortDirection = searchParams.get('direction') || defaultSortDirection

  const sorting = useMemo<SortingState>(() => {
    return [{
      id: sortBy,
      desc: sortDirection === 'desc'
    }]
  }, [sortBy, sortDirection])

  const onSortChange = (updater: Updater<SortingState>)=> {
    const newSorting = typeof updater === 'function'
      ? updater(sorting)
      : updater

    const newSort = newSorting[0]

    if (newSort) {
      const params = new URLSearchParams(searchParams)
      params.set('sort_by', newSort.id)
      params.set('direction', newSort.desc ? 'desc' : 'asc')
      setSearchParams(params, { replace: true })
    } else {
      const params = new URLSearchParams(searchParams)
      params.delete('sort_by')
      params.delete('direction')
      setSearchParams(params, { replace: true })
    }
  }

  const table = useReactTable<T>({
    data: items,
    columns: columnsConfig,
    state: {
      sorting
    },
    onSortingChange: (updater) => onSortChange(updater),
    enableSorting: true,
    manualSorting: true,
    getCoreRowModel: getCoreRowModel()
  })

  return table
}
