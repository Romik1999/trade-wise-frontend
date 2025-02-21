import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import React from 'react';
import { useComponent } from '../model';

const ComponentTable = () => {
  const { componentsList, isComponentsListLoading } = useComponent();

  if (isComponentsListLoading) {
    return <CircularProgress size="30px" />;
  }

  return (
    <Box overflow="hidden">
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>title</TableCell>
              <TableCell>description</TableCell>
              <TableCell>price</TableCell>
              <TableCell>images</TableCell>
              <TableCell>seller_link</TableCell>
              <TableCell>remainder</TableCell>
              <TableCell>unit_measure</TableCell>
              <TableCell>length</TableCell>
              <TableCell>width</TableCell>
              <TableCell>height</TableCell>
              <TableCell>diameter</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {componentsList.map((componentsItem) => {
              return (
                <TableRow hover key={componentsItem.id}>
                  <TableCell>
                    {componentsItem.title}
                  </TableCell>
                  <TableCell>
                    {componentsItem.description}
                  </TableCell>
                  <TableCell>
                    {componentsItem.price}
                  </TableCell>
                  <TableCell>
                    {componentsItem.images}
                  </TableCell>
                  <TableCell>
                    {componentsItem.seller_link}
                  </TableCell>
                  <TableCell>
                    {componentsItem.remainder}
                  </TableCell>
                  <TableCell>
                    {componentsItem.unit_measure}
                  </TableCell>
                  <TableCell>
                    {componentsItem.length}
                  </TableCell>
                  <TableCell>
                    {componentsItem.width}
                  </TableCell>
                  <TableCell>
                    {componentsItem.height}
                  </TableCell>
                  <TableCell>
                    {componentsItem.diameter}
                  </TableCell>

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {/*<TablePagination*/}
      {/*  rowsPerPageOptions={[10, 25, 100]}*/}
      {/*  component="div"*/}
      {/*  count={rows.length}*/}
      {/*  rowsPerPage={rowsPerPage}*/}
      {/*  page={page}*/}
      {/*  onPageChange={handleChangePage}*/}
      {/*  onRowsPerPageChange={handleChangeRowsPerPage}*/}
      {/*/>*/}
    </Box>
  );
};

export default ComponentTable;
