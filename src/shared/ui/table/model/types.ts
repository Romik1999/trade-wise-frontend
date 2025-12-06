import type { ReactNode } from 'react'

export interface ICellProps<T> {
    title: string | ReactNode;
    columnKey: string;
    enabledMultiSort?: boolean;
    enabledColumnSort?: boolean;
    getContent?: (data: T) => ReactNode;
    width?: string | number;
}

export interface ITableConfigProps<T> {
    cells: ICellProps<T>[];
}

export interface ITableProps<T> {
    tableConfig: ITableConfigProps<T>;
    items?: T[];
    isItemsLoading?: boolean;
    itemsTotal?: number;
    maxHeight?: number;
}

export interface ITableBodyProps<T> {
    tableConfig: ITableConfigProps<T>;
    items?: T[];
}

export interface ITableHeadColumnProps<T> {
    cell: ICellProps<T>;
}

export interface ITableHeaderProps<T> {
    tableConfig: ITableConfigProps<T>;
}
