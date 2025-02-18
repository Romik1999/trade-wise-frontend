import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { axiosClassic } from '../../shared/api/axios';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';

const Products = () => {
  const { isFetching, data } = useQuery({
    queryKey: ['products'],
    queryFn: async () => axiosClassic.get('product'),
    select: (data) => data.data,
    refetchOnWindowFocus: false,
  });

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>title</TableCell>
          <TableCell align="right">description</TableCell>
          <TableCell align="right">price</TableCell>
          <TableCell align="right">createdAt</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((row) => (
          <TableRow
            key={row.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.title}
            </TableCell>
            <TableCell align="right">{row.description}</TableCell>
            <TableCell align="right">{row.price}</TableCell>
            <TableCell align="right">{row.createdAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default Products;
