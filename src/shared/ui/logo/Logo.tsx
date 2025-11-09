import { FULL_ROUTES } from '../../constants/routes.ts'
import { Stack, Typography, useTheme } from '@mui/material'
import AppLogo from '../../../assets/images/app-logo.png'
import { NavLink } from 'react-router-dom'

export const Logo = () => {
  const theme = useTheme()

  return (
    <NavLink
      to={FULL_ROUTES.PRIVATE.HOME}
      style={{ textDecoration: 'none' }}
    >
      <Stack direction="row" spacing="4px" alignItems="center">

        <img
          src={AppLogo}
          alt="app-logo"
          loading="lazy"
          style={{
            objectFit: 'contain',
            width: '50px'
          }}
        />

        <Stack direction="row">
          <Typography fontWeight={600} fontSize={30} color={theme.palette.primary.main}>Trade</Typography>
          <Typography fontWeight={300} fontSize={30} color={theme.palette.primary.main}>Wise</Typography>
        </Stack>
      </Stack>
    </NavLink>
  )
}
