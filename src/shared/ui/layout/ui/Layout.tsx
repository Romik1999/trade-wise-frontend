import type { FC, ReactNode } from 'react'
import { Stack } from '@mui/material'
import { Header } from '../../../../widgets/header/ui'
import { Sidebar } from '../../../../widgets/sidebar'
import { useSidebar } from '../../../../widgets/sidebar/model/useSidebar.ts'

interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const { isTabletView, isOpenSidebar, onToggleSidebar, contentWrapperStyles } = useSidebar()

  return (
    <Stack
      spacing="0"
      height="100vh"
      direction="row"
      sx={{ backgroundColor: '#f5f5f9', overflow: 'hidden' }}
    >
      <Sidebar isOpenSidebar={isOpenSidebar} onToggleSidebar={onToggleSidebar} isTabletView={isTabletView}/>

      <Stack spacing="16px" padding="16px" sx={{ ...contentWrapperStyles }}
        overflow="auto"
      >
        <Header isOpenSidebar={isOpenSidebar} onToggleSidebar={onToggleSidebar} isTabletView={isTabletView}/>
        {children}
      </Stack>
    </Stack>
  )
}

export default Layout
