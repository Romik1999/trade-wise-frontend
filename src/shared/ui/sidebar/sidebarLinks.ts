import { FULL_ROUTES } from '../../constants/routes.ts'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'

export const sidebarLinks = [
  {
    linkTo: FULL_ROUTES.PRIVATE.HOME,
    title: 'Главная',
    icon: HomeRoundedIcon
  },
  {
    linkTo: FULL_ROUTES.PRIVATE.PRODUCTS,
    title: 'Товары'
  },
  {
    linkTo: FULL_ROUTES.PRIVATE.COMPONENTS,
    title: 'Компоненты'
  },
  {
    linkTo: FULL_ROUTES.PRIVATE.SETTINGS,
    title: 'Настройки'
  }
]
