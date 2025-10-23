import React, { FC, ReactNode } from 'react';
import { BreadcrumbProps, Breadcrumbs } from '../../breadcrumbs';
import { Stack, Typography } from '@mui/material';

export type PageProps = {
  title: string;
  children: ReactNode;
  pageActions?: ReactNode;
  breadcrumbs?: BreadcrumbProps[];
};

export const Page: FC<PageProps> = ({
  title,
  breadcrumbs,
  pageActions,
  children,
}) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs breadcrumbsList={breadcrumbs} />
      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h1">{title}</Typography>
        {!!pageActions && pageActions}
      </Stack>
      {children}
    </Stack>
  );
};
