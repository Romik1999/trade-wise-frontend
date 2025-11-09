import { Avatar, Stack, Typography } from '@mui/material'
import type { FC } from 'react'

export interface IUserInfoProps {
    showTextInfo?: boolean
}

export const UserInfo:FC<IUserInfoProps> = ({ showTextInfo = true }) => {
  return (
    <Stack spacing="16px" direction="row" alignItems="center">
      <Avatar sizes="40px">A</Avatar>

      {showTextInfo && (
        <Stack spacing="0">
          <Typography variant='h6' component="span">Admin</Typography>
          <Typography variant="body2" component="span">1@1.ru</Typography>
        </Stack>
      )}
    </Stack>
  )
}
