import React from 'react';
import { useComponentDetail } from '../model';
import { Box, CircularProgress, MenuItem, Stack, Typography } from '@mui/material';
import ConfirmModal from '../../../shared/ui/confirm-modal/ui/ConfirmModal';
import { deleteComponent } from '../api';
import { useNavigation } from 'react-router-dom';

const ComponentDetail = () => {
  const { componentDetail, isComponentDetailLoading } = useComponentDetail();
  const navigation = useNavigation();
  if (isComponentDetailLoading) {
    return <CircularProgress size="30px" />;
  }

  if (!componentDetail) {
    return 'Данных не найдено';
  }

  return (
    <Stack spacing={'20px'}>
      <Box>Хлебные крошки</Box>
      <Stack spacing={'20px'} direction={'row'}>
        <Typography variant={'h1'}>{componentDetail?.title}</Typography>
        <ConfirmModal
          title={'Удалить компонент?'}
          description={`Вы действительно хотите удалить компонент ${componentDetail.title} ?`}
          customTrigger={<MenuItem>Удалить</MenuItem>}
          confirmButtonText={'Удалить'}
          onSuccess={() => {
            navigation('/components')
          }}
          successText={'Удаление успешно'}
          request={() => deleteComponent(componentDetail.id)}
        />
      </Stack>

    </Stack>
  );
};

export default ComponentDetail;
