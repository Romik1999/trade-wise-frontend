import React, { FC, memo } from 'react';
import { TableHead, TableRow } from '@mui/material';
import { TableConfig } from './Table';
import TableHeadColumnCustom from './TableHeadColumn';

export type TableHeadCustomProps = {
  tableConfig: TableConfig;
};

const TableHeadCustom: FC<TableHeadCustomProps> = memo(
  ({ tableConfig }) => {
    return (
      <TableHead>
        <TableRow>
          {tableConfig.cells.map((cell) => {
            return <TableHeadColumnCustom key={cell.columnKey} cell={cell} />;
          })}
        </TableRow>
      </TableHead>
    );
  }
);

export default TableHeadCustom;
