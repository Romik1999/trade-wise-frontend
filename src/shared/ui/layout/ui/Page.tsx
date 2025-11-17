import type { FC, ReactNode } from 'react'
import { Stack, Typography } from '@mui/material'

export interface IPageProps {
  title: string;
  children: ReactNode;
}

export const Page: FC<IPageProps> = ({
  title,
  children
}) => {
  return (
    <Stack spacing={2}>

      <Stack
        spacing={2}
        direction="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h1">{title}</Typography>
      </Stack>

      {children}
    </Stack>
  )
}
