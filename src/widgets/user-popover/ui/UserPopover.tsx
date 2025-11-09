import { Box, Divider, MenuItem, Stack } from '@mui/material'
import { Popover } from '../../../shared/ui/popover'
import { UserInfo } from './UserInfo.tsx'

export const UserPopover = () => {
  return (
    <Popover trigger={<UserInfo showTextInfo={false}/>}>
      {(handleClose) => (
        <Stack spacing='5px'>
          <Box padding="0 20px">
            <UserInfo/>
          </Box>

          <Divider/>

          <MenuItem
            onClick={() => {
              handleClose()
            }}
          >
                Мой профиль
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClose()
            }}
          >
            Настройки
          </MenuItem>

          <Divider/>

          <MenuItem
            onClick={() => {
              handleClose()
            }}
          >
            Выйти
          </MenuItem>
        </Stack>
      )}
    </Popover>
  )
}
