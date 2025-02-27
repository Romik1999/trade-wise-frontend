import React, { FC, memo, ReactNode } from 'react';
import TableHeadCustom from './TableHead';
import TableBodyCustom from './TableBody';
import { Box, CircularProgress, Table, TableContainer } from '@mui/material';

export type CellsType = {
  title: string | FC | ReactNode;
  columnKey: string;
  enabledMultiColumnSort?: boolean;
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
};

const TableCustom: FC<TableCustomProps> = memo(({
  tableConfig,
  items,
  isItemsLoading = false,
}) => {
  return (
    <Box overflow="hidden">
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHeadCustom tableConfig={tableConfig} />
          {isItemsLoading ? (
            <CircularProgress size="30px" />
          ) : (
            <TableBodyCustom tableConfig={tableConfig} items={items} />
          )}
        </Table>
      </TableContainer>
    </Box>
  );
});

export default TableCustom;
