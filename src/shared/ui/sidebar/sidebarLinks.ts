import { FULL_ROUTES } from '../../constants/routes.ts'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import SettingsInputComponentRoundedIcon from '@mui/icons-material/SettingsInputComponentRounded'
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded'
import SettingsIcon from '@mui/icons-material/Settings'

export const sidebarLinks = [
  {
    linkTo: FULL_ROUTES.PRIVATE.HOME,
    title: 'Главная',
    icon: HomeRoundedIcon
  },
  {
    linkTo: FULL_ROUTES.PRIVATE.PRODUCTS,
    title: 'Товары',
    icon: ShoppingCartRoundedIcon
  },
  {
    linkTo: FULL_ROUTES.PRIVATE.COMPONENTS,
    title: 'Компоненты',
    icon: SettingsInputComponentRoundedIcon
  },
  {
    linkTo: FULL_ROUTES.PRIVATE.SETTINGS,
    title: 'Настройки',
    icon: SettingsIcon
  }
]
