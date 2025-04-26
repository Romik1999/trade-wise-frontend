import React, { FC } from 'react';
import { MenuItem, Stack } from '@mui/material';
import PopoverOptions from '../../../shared/ui/popover-options/ui/PopoverOptions';
import { ComponentDTO } from '../model/product.dto';
import ConfirmModal from '../../../shared/ui/confirm-modal/ui/ConfirmModal';
import { deleteComponent } from '../api';
import { useComponentsList } from '../model';

export type ComponentPopoverProps = {
  component: ComponentDTO;
};

const ComponentPopover: FC<ComponentPopoverProps> = ({ component }) => {
  const { componentsListRefetch } = useComponentsList();

  return (
    <PopoverOptions>
      {(hide) => (
        <Stack spacing={'5px'}>
          <MenuItem
            onClick={() => {
              hide?.();
            }}
          >
            Копировать
          </MenuItem>
          <MenuItem
            onClick={() => {
              hide?.();
            }}
          >
            Быстрый просмотр
          </MenuItem>
          <ConfirmModal
            title={'Удалить компонент?'}
            description={`Вы действительно хотите удалить компонент ${component.title} ?`}
            customTrigger={<MenuItem>Удалить</MenuItem>}
            confirmButtonText={'Удалить'}
            successText={'Удаление успешно!'}
            onSuccess={() => {
              componentsListRefetch();
            }}
            request={() => deleteComponent(component.id)}
          />
        </Stack>
      )}
    </PopoverOptions>
  );
};

export default ComponentPopover;
