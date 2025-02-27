import { Box } from '@mui/material';
import React from 'react';
import { useComponent } from '../model';
import { BACK_URL } from '../../../constants';
import { NavLink } from 'react-router-dom';
import ImagePreview from '../../../shared/ui/image-preview';
import { ComponentDTO } from '../model/product.dto';
import TableCustom from '../../../shared/ui/table/ui/Table';

const ComponentTable = () => {
  const { componentsList, isComponentsListLoading } = useComponent();

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
      },
      {
        title: 'Изображение',
        columnKey: 'images',
        getContent: (component: ComponentDTO) => (
          <ImagePreview
            imageUrl={`${BACK_URL}${component.images[0]}`}
            altText={component.title}
          />
        ),
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
          <Box>
            {component.createdAt}
          </Box>
        ),
      },
      {
        title: '',
        columnKey: 'actions',
        getContent: (component: ComponentDTO) => <Box>Delete Patch Watch</Box>,
      },
    ],
  };

  if (!componentsList) {
    return 'Данных не найдено';
  }

  return <TableCustom tableConfig={tableConfig} items={componentsList} isItemsLoading={isComponentsListLoading} />;
};

export default ComponentTable;
