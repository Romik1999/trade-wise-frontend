import { useVirtualizer } from '@tanstack/react-virtual'
import type { ITableBodyProps } from '../types/table.types.ts'
import { useEffect } from 'react'

export const useTableBody = <T, > (table: ITableBodyProps<T>['table'], tableContainerRef: ITableBodyProps<T>['tableContainerRef'])=>{
  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLDivElement>({
    count: rows.length,
    estimateSize: () => 33,
    getScrollElement: () => tableContainerRef.current,
    measureElement:
            typeof window !== 'undefined'
            && navigator.userAgent.indexOf('Firefox') === -1
              ? (element) => element?.getBoundingClientRect().height
              : undefined,
    overscan: 5
  })

  useEffect(() => {
    if (tableContainerRef.current) {
      rowVirtualizer.measure()
    }
  }, [rowVirtualizer, tableContainerRef])

  return { rows, rowVirtualizer }
}
