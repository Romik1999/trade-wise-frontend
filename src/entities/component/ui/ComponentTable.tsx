import { Box } from '@mui/material';
import React from 'react';
import { useComponentsList } from '../model';
import { NavLink } from 'react-router-dom';
import { ComponentDTO } from '../model/product.dto';
import TableCustom from '../../../shared/ui/table/ui/Table';
import ComponentPopover from './ComponentPopover';
import { formatDate } from '../../../shared/utils/common';

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
      getContent: (component: ComponentDTO) => <Box>{formatDate(component.createdAt)}</Box>,
      enabledMultiSort: true,
    },
    {
      title: '',
      columnKey: 'actions',
      width: '50px',
      getContent: (component: ComponentDTO) => (
        <ComponentPopover component={component} />
      ),
    },
  ],
};

const ComponentTable = () => {
  const { componentsList, isComponentsListLoading, componentsListTotal } =
    useComponentsList();

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
