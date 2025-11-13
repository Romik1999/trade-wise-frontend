import { type FC } from 'react'
import { ListItemButton, ListItemIcon, ListItemText, type SvgIconTypeMap, useTheme } from '@mui/material'
import type { OverridableComponent } from '@mui/material/OverridableComponent'
import { Link, useLocation } from 'react-router-dom'

export interface INavigationMenuLinkProps {
    to: string
    linkText: string
    IconComponent?: OverridableComponent<SvgIconTypeMap>
}

export const NavigationMenuLink: FC<INavigationMenuLinkProps> = ({ to, linkText, IconComponent }) => {
  const theme = useTheme()
  const location = useLocation()
  const isActive = location.pathname === to

  return (
    <ListItemButton
      to={to}
      component={Link}
      sx={{
        backgroundColor: isActive ? 'rgba(105, 108, 255, 0.16)' : 'inherit',
        color: isActive ? theme.palette.primary.main : 'inherit',
        borderRadius: '0.375rem',
        position: 'relative',

        '&:after': {
          content: '""',
          height: '100%',
          display: 'flex',
          position: 'absolute',
          top: 0,
          right: '-10px',
          width: '0.25rem',
          borderRadius: '0.375rem 0 0 0.375rem',
          backgroundColor: isActive ? theme.palette.primary.main : 'transparent'
        }
      }}
    >
      {IconComponent && (
        <ListItemIcon
          sx={{
            minWidth: '36px',
            color: isActive ? `${theme.palette.primary.main}!important` : theme.palette.text.primary
          }}
        >
          <IconComponent/>
        </ListItemIcon>
      )}

      <ListItemText
        primary={linkText}
        slotProps={{
          primary: {
            sx: {
              color: isActive ? `${theme.palette.primary.main}!important` : theme.palette.text.primary
            }
          }
        }}
      />
    </ListItemButton>

  )
}
