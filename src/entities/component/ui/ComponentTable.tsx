import { Box } from '@mui/material';
import React from 'react';
import { useComponent } from '../model';
import { NavLink } from 'react-router-dom';
import { ComponentDTO } from '../model/product.dto';
import TableCustom from '../../../shared/ui/table/ui/Table';

const tableConfig = {
  cells: [
    {
      title: 'Название',
      columnKey: 'title',
      getContent: (component: ComponentDTO) => (
        <NavLink to={component.id}>{component.title}</NavLink>
      ),
      enabledMultiSort: true,
    },
    {
      title: 'Описание',
      columnKey: 'description',
      getContent: (component: ComponentDTO) => (
        <Box>{component.description}</Box>
      ),
    },
    {
      title: 'Закупочная цена, р',
      columnKey: 'price',
      getContent: (component: ComponentDTO) => <Box>{component.price}</Box>,
      enabledMultiSort: true,
    },
    {
      title: 'Ссылка на продавца',
      columnKey: 'images',
      getContent: (component: ComponentDTO) => (
        <NavLink to={component.seller_link} target="_blank">
          Ссылка
        </NavLink>
      ),
    },
    {
      title: 'Дата создания',
      columnKey: 'createdAt',
      getContent: (component: ComponentDTO) => (
        <Box>{component.createdAt}</Box>
      ),
      enabledMultiSort: true,
    },
    {
      title: '',
      columnKey: 'actions',
      getContent: (component: ComponentDTO) => <Box>Delete Patch Watch</Box>,
    },
  ],
};

const ComponentTable = () => {
  const { componentsList, isComponentsListLoading } = useComponent();

  return (
    <TableCustom
      tableConfig={tableConfig}
      items={componentsList}
      isItemsLoading={isComponentsListLoading}
    />
  );
};

export default ComponentTable;
