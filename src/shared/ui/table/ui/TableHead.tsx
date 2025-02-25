import React, { FC } from 'react';
import { Box, TableCell, TableHead, TableRow } from '@mui/material';
import { TableConfig } from './Table';

export type TableHeadCustomProps = {
  tableConfig: TableConfig;
};

const TableHeadCustom: FC<TableHeadCustomProps> = ({ tableConfig }) => {
  return (
    <TableHead>
      <TableRow>
        {tableConfig.cells.map((cell) => {
          return (
            <TableCell key={cell.key}>
              <Box>{cell.title}</Box>
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadCustom;
