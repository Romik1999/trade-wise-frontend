import { useEffect, useState } from 'react'
import { useMediaQuery, useTheme } from '@mui/material'

export const useSidebar = ()=> {
  const theme = useTheme()
  const isTabletView = useMediaQuery(theme.breakpoints.down('md')) // < 900px
  const [isOpenSidebar, setIsOpenSidebar] = useState(!isTabletView)

  const onToggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar)
  }

  const contentWrapperStyles = {
    width: isTabletView ? '100%' : 'calc(100% - 300px)'
  }

  useEffect(() => {
    if (isTabletView) {
      setIsOpenSidebar(false)
    } else {
      setIsOpenSidebar(true)
    }
  }, [isTabletView])

  return { isTabletView, isOpenSidebar, onToggleSidebar, contentWrapperStyles }
}
