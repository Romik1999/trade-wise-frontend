import type { FC, ReactNode } from 'react'
import { Box, Stack } from '@mui/material'

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Stack
      spacing={1}
      height="100vh"
      direction="row"
      sx={{ backgroundColor: 'rgba(27, 89, 248, 0.1)', overflow: 'hidden' }}
    >
      <Box>place for sidebar</Box>
      <Box width="calc(100% - 300px)" padding={3} overflow="auto">{children}</Box>
    </Stack>
  )
}

export default Layout
