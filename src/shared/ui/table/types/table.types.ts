import type { Cell, ColumnDef, Header, HeaderGroup, Row, Table } from '@tanstack/react-table'
import type { RefObject } from 'react'
import type { VirtualItem, Virtualizer } from '@tanstack/react-virtual'

interface IPagination {
    total: number;
    current_page: number;
    per_page: number;
}

export interface ITableProps<T> {
    items: T[]
    columnsConfig: ColumnDef<T>[]
    pagination?: IPagination
    isLoading?: boolean
    maxHeight?: string
}

export interface ITableBodyProps<T> {
    isLoading: boolean
    table: Table<T>
    tableContainerRef: RefObject<HTMLDivElement | null>
}

export interface ITableHeaderProps<T> {
    table: Table<T>
}

export interface IRowHeaderProps<T> {
    headerGroup: HeaderGroup<T>
}

export interface IHeaderCellProps<T> {
    header: Header<T, unknown>;
}

export interface IRowDataProps<T> {
    row: Row<T>
    virtualRow: VirtualItem
    rowVirtualizer: Virtualizer<HTMLDivElement, HTMLDivElement>
}

export interface IBodyCellProps<T> {
    cell: Cell<T, unknown>
}
