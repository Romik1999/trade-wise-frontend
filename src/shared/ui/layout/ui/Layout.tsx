import type { FC, ReactNode } from 'react'
import { Stack } from '@mui/material'
import { Sidebar } from '../../sidebar'
import { Header } from '../../../../widgets/header/ui'

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <Stack
      spacing="0"
      height="100vh"
      direction="row"
      sx={{ backgroundColor: '#f5f5f9', overflow: 'hidden' }}
    >
      <Sidebar/>

      <Stack spacing="16px" width="calc(100% - 300px)" padding="16px"
        overflow="auto"
      >
        <Header/>
        {children}
      </Stack>
    </Stack>
  )
}

export default Layout
