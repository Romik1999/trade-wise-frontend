import React, { FC } from 'react';
import { ComponentDTO } from '../../../../entities/component/model/product.dto';
import { Box, TableBody, TableCell, TableRow } from '@mui/material';
import { TableConfig } from './Table';

export type TableBodyCustomProps = {
  tableConfig: TableConfig;
  items?: any;
};

const TableBodyCustom: FC<TableBodyCustomProps> = ({ tableConfig, items }) => {
  if (!items) {
    return null;
  }

  return (
    <TableBody>
      {items.map((item: ComponentDTO) => {
        return (
          <TableRow hover key={item.id}>
            {tableConfig.cells.map((cell) => {
              return (
                <TableCell key={cell.key}>
                  <Box>{cell.getContent ? cell.getContent(item) : ""}</Box>
                </TableCell>
              );
            })}
          </TableRow>
        );
      })}
    </TableBody>
  );
};

export default TableBodyCustom;
