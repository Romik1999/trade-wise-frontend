import { useVirtualizer } from '@tanstack/react-virtual'
import type { ITableBodyProps } from '../types/table.types.ts'

export const useTableBody = <T, > (table: ITableBodyProps<T>['table'], tableContainerRef: ITableBodyProps<T>['tableContainerRef'])=>{
  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtualizer<HTMLDivElement, HTMLTableRowElement>({
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
  return { rows, rowVirtualizer }
}
