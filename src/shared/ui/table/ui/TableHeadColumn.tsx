import React, { FC, memo, useEffect, useState } from 'react';
import { Box, TableCell } from '@mui/material';
import { CellsType } from './Table';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpward';
import { useSearchParams } from 'react-router-dom';

export type TableHeadColumnCustomProps = {
  cell: CellsType;
};


const TableHeadColumnCustom: FC<TableHeadColumnCustomProps> = memo(
  ({ cell }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [currentDirection, setCurrentDirection] = useState(null);

    useEffect(() => {
      const direction = searchParams.get(`sort[${cell.columnKey}]`);
      setCurrentDirection(direction);
    }, [searchParams, cell.columnKey]);

    const toggleSortParam = () => {
      let newDirection = null;

      if (!currentDirection) {
        newDirection = 'asc';
      } else if (currentDirection === 'asc') {
        newDirection = 'desc';
      }

      if (newDirection) {
        searchParams.set(`sort[${cell.columnKey}]`, newDirection);
      } else {
        searchParams.delete(`sort[${cell.columnKey}]`);
      }

      setSearchParams(searchParams);
      setCurrentDirection(newDirection);
    };

    const styles = {
      fontWeight:  currentDirection !== null && "bold",
      cursor: cell.enabledMultiSort && "pointer",
    }


    return (
      <TableCell>
        <Box
          display="flex"
          columnGap="5px"
          onClick={() => {
            cell.enabledMultiSort && toggleSortParam();
          }}
          style={{ ...styles }}
        >
          {cell.title}
          {cell.enabledMultiSort && cell.title !== '' && (
            <Box>
              {currentDirection === 'asc' ? (
                <ArrowDownwardOutlinedIcon />
              ) : (
                <ArrowUpwardOutlinedIcon />
              )}
            </Box>
          )}
        </Box>
      </TableCell>
    );
  },
  (prevProps, nextProps) => {
    return false;
  }
);

export default TableHeadColumnCustom;
