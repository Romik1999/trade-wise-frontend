import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { useComponentsList } from '../model';
import { NavLink } from 'react-router-dom';
import { ComponentDTO } from '../model/product.dto';
import TableCustom from '../../../shared/ui/table/ui/Table';
import PopoverOptions from '../../../shared/ui/popover-options/ui/PopoverOptions';

const tableConfig = {
  cells: [
    {
      title: 'Название',
      columnKey: 'title',
      getContent: (component: ComponentDTO) => (
        <NavLink to={component.id}>{component.title}</NavLink>
      ),
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
      getContent: (component: ComponentDTO) => <PopoverOptions><Typography onClick={()=>{}}>Удалить</Typography></PopoverOptions>,
    },
  ],
};

const ComponentTable = () => {
  const { componentsList, isComponentsListLoading, componentsListTotal } = useComponentsList();

  return (
    <TableCustom
      tableConfig={tableConfig}
      items={componentsList}
      isItemsLoading={isComponentsListLoading}
      itemsTotal={componentsListTotal}
    />
  );
};

export default ComponentTable;
