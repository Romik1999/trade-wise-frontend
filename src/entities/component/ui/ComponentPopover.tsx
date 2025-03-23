import React, { FC } from 'react';
import { MenuItem } from '@mui/material';
import PopoverOptions from '../../../shared/ui/popover-options/ui/PopoverOptions';
import { ComponentDTO } from '../model/product.dto';
import ConfirmModal from '../../../shared/ui/confirm-modal/ui/ConfirmModal';
import { deleteComponent } from '../api';
import { useComponentsList } from '../model';

export type ComponentPopoverProps = {
  component: ComponentDTO;
};

const ComponentPopover:FC<ComponentPopoverProps> = ({ component }) => {
  const {componentsListRefetch} = useComponentsList()

  return (
    <PopoverOptions>
      <ConfirmModal
        title={'Удалить компонент?'}
        description={`Вы действительно хотите удалить компонент ${component.title} ?`}
        customTrigger={<MenuItem>Удалить</MenuItem>}
        confirmButtonText={'Удалить'}
        onSuccess={() => {
          componentsListRefetch()
        }}
        request={()=>deleteComponent(component.id)}
      />
    </PopoverOptions>
  );
};

export default ComponentPopover;
