import React, { FC } from 'react';
import { TableHead, TableRow } from '@mui/material';
import { TableConfig } from './Table';
import { useSearchParams } from 'react-router-dom';
import TableHeadColumnCustom from './TableHeadColumn';

export type TableHeadCustomProps = {
  tableConfig: TableConfig;
};

const TableHeadCustom: FC<TableHeadCustomProps> = ({ tableConfig }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const updateMultiSort = (x: {
    key: string;
    sortDirection: string;
    count: number;
  }) => {
    const params = new URLSearchParams(searchParams);

    if (x.count !== 0) {
      params.set(`sort[${x.key}]`, x.sortDirection.toLowerCase());
    } else {
      params.delete(`sort[${x.key}]`);
    }

    setSearchParams(params);
  };

  return (
    <TableHead>
      <TableRow>
        {tableConfig.cells.map((cell) => {
          return (
            <TableHeadColumnCustom
              key={cell.columnKey}
              cell={cell}
              updateMultiSort={updateMultiSort}
            />
          );
        })}
      </TableRow>
    </TableHead>
  );
};

export default TableHeadCustom;
