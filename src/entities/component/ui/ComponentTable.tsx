import {
  Box,
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import { useComponent } from '../model';
import { BACK_URL } from '../../../constants';
import { NavLink } from 'react-router-dom';
import ImagePreview from '../../../shared/ui/image-preview';
import { ComponentDTO, EnumUnitMeasureTranslate } from '../model/product.dto';

const ComponentTable = () => {
  const { componentsList, isComponentsListLoading } = useComponent();

  if (isComponentsListLoading) {
    return <CircularProgress size="30px" />;
  }

  if (!componentsList) {
    return 'Данных не найдено';
  }

  return (
    <Box overflow="hidden">
      <TableContainer sx={{ maxHeight: '100%' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Название</TableCell>
              <TableCell>Описание</TableCell>
              <TableCell>Закупочная цена, р</TableCell>
              <TableCell>Изображение</TableCell>
              <TableCell>Ссылка на продавца</TableCell>
              <TableCell>Остаток</TableCell>
              <TableCell>Ед. измерения</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {componentsList.map((componentsItem: ComponentDTO) => {
              return (
                <TableRow hover key={componentsItem.id}>
                  <TableCell>
                    <NavLink to={componentsItem.id}>
                      {componentsItem.title}
                    </NavLink>
                  </TableCell>
                  <TableCell>{componentsItem.description}</TableCell>
                  <TableCell>{componentsItem.price}</TableCell>
                  <TableCell>
                    <ImagePreview
                      imageUrl={`${BACK_URL}${componentsItem.images[0]}`}
                      altText={componentsItem.title}
                    />
                  </TableCell>
                  <TableCell>
                    <NavLink to={componentsItem.seller_link} target="_blank">
                      Ссылка
                    </NavLink>
                  </TableCell>
                  <TableCell>{componentsItem.remainder}</TableCell>
                  <TableCell>
                    {EnumUnitMeasureTranslate[componentsItem.unit_measure]}
                  </TableCell>
                  <TableCell>
                    Delete
                    Patch
                    Watch
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
