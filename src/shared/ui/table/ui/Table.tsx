import React, { FC, ReactNode } from 'react';
import TableHeadCustom from './TableHead';
import TableBodyCustom from './TableBody';
import { Box, CircularProgress, Table, TableContainer } from '@mui/material';
import TablePagination from './TablePagination';

export type CellsType = {
  title: string | FC | ReactNode;
  columnKey: string;
  enabledMultiSort?: boolean;
  enabledColumnSort?: boolean;
  getContent?: (data: any) => any;
  width?: string | number;
};

export type TableConfig = {
  cells: CellsType[];
};

export type TableCustomProps = {
  tableConfig: TableConfig;
  items?: any;
  isItemsLoading?: boolean;
  itemsTotal?: number;
};

const TableCustom: FC<TableCustomProps> = ({
  tableConfig,
  items,
  isItemsLoading = false,
  itemsTotal
}) => {
  return (
    <Box overflow="hidden">
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          style={{ minHeight: '300px', position: 'relative' }}
        >
          <TableHeadCustom tableConfig={tableConfig} />
          {isItemsLoading ? (
            <Box
              width="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
              minHeight="calc(100% - 100px)"
              position="absolute"
            >
              <CircularProgress size="30px" />
            </Box>
          ) : (
            <TableBodyCustom tableConfig={tableConfig} items={items} />
          )}
        </Table>
      </TableContainer>
      <TablePagination itemsTotal={itemsTotal}/>
    </Box>
  );
};

export default TableCustom;
