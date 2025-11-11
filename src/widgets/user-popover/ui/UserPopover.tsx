import { Box, Divider, ListItemIcon, MenuItem, Stack } from '@mui/material'
import { Popover } from '../../../shared/ui/popover'
import { UserInfo } from './UserInfo.tsx'
import { useUser } from '../../../entities/user/model/useUser.ts'
import PersonIcon from '@mui/icons-material/Person'
import SettingsIcon from '@mui/icons-material/Settings'
import LogoutIcon from '@mui/icons-material/Logout'
import NotificationsIcon from '@mui/icons-material/Notifications'
import { Link } from 'react-router-dom'
import { FULL_ROUTES } from '../../../shared/constants/routes.ts'

export const UserPopover = () => {
  const { user } = useUser()

  if (!user) {
    return null
  }

  return (
    <Popover trigger={<UserInfo showTextInfo={false} user={user}/>}>
      {(handleClose) => (
        <Stack spacing='5px'>
          <Box padding="0 20px">
            <UserInfo user={user}/>
          </Box>

          <Divider/>

          <MenuItem
            component={Link}
            to={FULL_ROUTES.PRIVATE.PROFILE}
            onClick={() => {
              handleClose()
            }}
          >
            <ListItemIcon>
              <PersonIcon/>
            </ListItemIcon>

            Мой профиль
          </MenuItem>

          <MenuItem
            component={Link}
            to={FULL_ROUTES.PRIVATE.SETTINGS}
            onClick={() => {
              handleClose()
            }}
          >
            <ListItemIcon>
              <SettingsIcon/>
            </ListItemIcon>

            Настройки
          </MenuItem>

          <MenuItem
            component={Link}
            to={FULL_ROUTES.PRIVATE.NOTIFICATIONS}
            onClick={() => {
              handleClose()
            }}
          >
            <ListItemIcon>
              <NotificationsIcon/>
            </ListItemIcon>

            Оповещения
          </MenuItem>

          <Divider/>

          <MenuItem
            onClick={() => {
              handleClose()
            }}
          >
            <ListItemIcon>
              <LogoutIcon/>
            </ListItemIcon>
            Выйти
          </MenuItem>
        </Stack>
      )}
    </Popover>
  )
}
