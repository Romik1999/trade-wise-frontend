import React, { FC, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TablePagination as Pagination } from '@mui/material';

export type TablePaginationProps = {
  itemsTotal?: number;
};

const TablePagination: FC<TablePaginationProps> = ({itemsTotal}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(Number(searchParams.get('page')) || 1);
  const [rowsPerPage, setRowsPerPage] = useState(
    Number(searchParams.get('pageSize')) || 10
  );

  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1);
    searchParams.set('page', newPage + 1);
    setSearchParams(searchParams);
  };

  const handleChangeRowsPerPage = (event) => {
    const newSize = parseInt(event.target.value, 10);
    setRowsPerPage(newSize);
    setPage(1);
    searchParams.set('pageSize', newSize);
    searchParams.set('page', 1);
    setSearchParams(searchParams);
  };

  return (
    <Pagination
      component="div"
      count={itemsTotal ?? 0}
      page={page - 1}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
};

export default TablePagination;
