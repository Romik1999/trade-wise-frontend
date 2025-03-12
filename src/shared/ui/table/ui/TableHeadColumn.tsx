import React, { FC, memo } from 'react';
import { Box, TableCell } from '@mui/material';
import { CellsType } from './Table';

export type TableHeadColumnCustomProps = {
  cell: CellsType;
};


const TableHeadColumnCustom: FC<TableHeadColumnCustomProps> = memo(
  ({ cell }) => {

    return (
      <TableCell>
        <Box
          display="flex"
          columnGap="5px"
        >
          {cell.title}
          {/*{cell.enabledColumnSort && cell.title !== '' && (*/}
          {/*  <Box>*/}
          {/*    {button.sortDirection === 'asc' ? (*/}
          {/*      <ArrowDownwardOutlinedIcon />*/}
          {/*    ) : (*/}
          {/*      <ArrowUpwardOutlinedIcon />*/}
          {/*    )}*/}
          {/*  </Box>*/}
          {/*)}*/}
        </Box>
      </TableCell>
    );
  },
  (prevProps, nextProps) => {
    return false;
  }
);

export default TableHeadColumnCustom;
