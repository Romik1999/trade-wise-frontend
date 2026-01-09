import type { ColumnDef } from '@tanstack/react-table'

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
