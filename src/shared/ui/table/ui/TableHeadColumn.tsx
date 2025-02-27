import React, { FC, memo, useState } from 'react';
import { Box, TableCell } from '@mui/material';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { CellsType } from './Table';
import { useSearchParams } from 'react-router-dom';

export type TableHeadColumnCustomProps = {
  cell: CellsType;
  updateMultiSort?: (x: {
    key: string;
    sortDirection: string;
    count: number;
  }) => void;
};

const TableHeadColumnCustom: FC<TableHeadColumnCustomProps> = memo(({
  cell,
  updateMultiSort,
}) => {
  const [searchParams] = useSearchParams();
  const multiSortString = searchParams.get('sort');
  const multiSort = multiSortString ? JSON.parse(multiSortString) : {};
  const isActiveButton = multiSort.hasOwnProperty(cell.columnKey);

  const getCount = (sortDirection: string) =>
    sortDirection === 'ASC' ? '1' : sortDirection === 'DESC' ? '2' : '0';

  const [button, setButton] = useState({
    count: isActiveButton ? Number(getCount(multiSort[cell.columnKey])) : 0,
    key: cell.columnKey,
    sortDirection: isActiveButton ? multiSort[cell.columnKey] : 'ASC',
  });

  const onClickFunc = (e) => {
    e.preventDefault();
    setButton((prevState) => {
      let newState;

      switch (prevState.count) {
        case 0:
          newState = { ...prevState, count: 1 };
          break;
        case 1:
          newState = { ...prevState, sortDirection: 'DESC', count: 2 };
          break;
        case 2:
          newState = { ...prevState, sortDirection: 'ASC', count: 0 };
          break;
        default:
          newState = { ...prevState };
          break;
      }

      updateMultiSort?.(newState);

      return newState;
    });
  };

  const textStyles = {
    color: button.count === 0 ? "var(--gray-40)" : "var(--gray-90)",
    fontWeight: button.count === 0 ? "400" : "bold",
    cursor: "pointer",
  }

  return (
    <TableCell>
      <Box
        display="flex"
        columnGap="5px"
        style={{ ...textStyles }}
        onClick={cell.enabledMultiColumnSort && onClickFunc}
      >
        {cell.title}
        {cell.enabledMultiColumnSort && cell.title !== '' && (
          <Box>
            {button.sortDirection === 'ASC' ? (
              <ArrowDownwardOutlinedIcon />
            ) : (
              <ArrowUpwardOutlinedIcon />
            )}
          </Box>
        )}
      </Box>
    </TableCell>
  );
});

export default TableHeadColumnCustom;
