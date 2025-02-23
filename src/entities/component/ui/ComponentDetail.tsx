import React from 'react';
import { useComponent } from '../model';
import { CircularProgress } from '@mui/material';

const ComponentDetail = () => {
  const { componentDetail, isComponentDetailLoading } = useComponent();
  if (isComponentDetailLoading){
    return <CircularProgress size="30px" />;
  }

  if (!componentDetail){
    return 'Данных не найдено';
  }

  console.log({ componentDetail });

  return (
    <div>
      {componentDetail?.title}
    </div>
  );
};

export default ComponentDetail;