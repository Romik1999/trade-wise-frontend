import { Box, List, Stack, useTheme } from '@mui/material'
import { Logo } from '../../../shared/ui/logo'
import { sidebarLinks } from '../config/sidebarLinks.ts'
import { NavigationMenuLink } from '../../../shared/ui/navigationMenuLink/ui/NavigationMenuLink.tsx'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded'
import type { FC } from 'react'

interface ISidebarContentProps {
    onToggleSidebar: () => void
    isTabletView: boolean
}

export const SidebarContent:FC<ISidebarContentProps> = ({ onToggleSidebar, isTabletView })=> {
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
      <Box position="relative">
        <Logo />

        {isTabletView && (
          <IconButton
            onClick={onToggleSidebar}
            sx={{
              width: '40px',
              height: '40px',
              position: 'absolute',
              right: '-30px',
              top: 'calc(50% - 20px)',
              backgroundColor: '#696cff',
              border: '3px solid #f5f5f9',
              padding: '2px',
              transition: '0.3s',
              color: 'white!important',
              '&:hover': {
                backgroundColor: '#696cff',
                border: '3px solid #696cff'
              }
            }}
          >
            <ArrowBackIosNewRoundedIcon sx={{ height: '20px', color: 'white' }}/>
          </IconButton>
        )}
      </Box>

      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {sidebarLinks?.map((sidebarLink, index) => (
          <NavigationMenuLink
            key={`list-item-${index}`}
            to={sidebarLink.linkTo}
            linkText={sidebarLink.title}
            IconComponent={sidebarLink?.icon}
            onClick={onToggleSidebar}
          />
        ))}
      </List>
    </Stack>
  )
}
