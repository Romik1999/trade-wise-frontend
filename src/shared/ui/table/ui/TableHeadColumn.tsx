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

    const iconColor = currentDirection !== null ? "inherit" : "disabled"

    useEffect(() => {
      const direction = searchParams.get(`sort[${cell.columnKey}]`);
      setCurrentDirection(direction);
    }, [searchParams, cell.columnKey]);


    return (
      <TableCell style={{width: cell.width}}>
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
            <Box display="flex">
              {currentDirection === 'asc' ? (
                <ArrowDownwardOutlinedIcon color={iconColor} />
              ) : (
                <ArrowUpwardOutlinedIcon color={iconColor} />
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
