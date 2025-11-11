import { Avatar, Stack, Typography } from '@mui/material'
import type { FC } from 'react'
import type { IUserDTO } from '../../../entities/user/model/type.ts'

export interface IUserInfoProps {
    showTextInfo?: boolean
    user?: IUserDTO | null
}

export const UserInfo:FC<IUserInfoProps> = ({ showTextInfo = true, user }) => {

  if (!user) {
    return null
  }

  const firstCharacter = user?.name?.slice(0, 1)?.toUpperCase()

  return (
    <Stack spacing="16px" direction="row" alignItems="center">
      <Avatar sizes="30px">{firstCharacter}</Avatar>

      {showTextInfo && (
        <Stack spacing="0">
          <Typography variant='body1' component="span">{user?.name}</Typography>
          <Typography variant="body2" component="span">{user?.email}</Typography>
        </Stack>
      )}
    </Stack>
  )
}
