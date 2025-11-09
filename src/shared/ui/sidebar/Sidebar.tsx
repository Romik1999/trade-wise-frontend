import { type FC, type ReactNode } from 'react'
import { List, ListItemButton, ListItemIcon, ListItemText, Stack, useTheme } from '@mui/material'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { Logo } from '../logo'
import { sidebarLinks } from './sidebarLinks.ts'

export interface ISidebarProps {
    children?: ReactNode
}

export const Sidebar:FC<ISidebarProps> = ({ children }) => {
  const theme = useTheme()

  return (
    <Stack
      minWidth="300px"
      width="300px"
      sx={{
        padding: '20px 10px',
        boxShadow: '0 0.125rem 0.375rem 0 rgba(161, 172, 184, 0.12)',
        backgroundColor: theme.palette.background.paper
      }}
      spacing={3}
    >

      <Logo />

      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {sidebarLinks?.map((sidebarLink, index) => (
          <ListItemButton key={`list-item-${index}`}>
            <ListItemIcon>
              {sidebarLink.icon ? (
                <sidebarLink.icon />
              ) : (
                <ChevronRightRoundedIcon />
              )}
            </ListItemIcon>

            <ListItemText primary={sidebarLink?.title} />
          </ListItemButton>
        ))}
      </List>

      {children}
    </Stack>
  )
}
