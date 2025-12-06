import { createTheme } from '@mui/material/styles'
import palette from './palette'
import { typography } from './typography'
import { responsiveFontSizes } from '@mui/material'
import { TextField } from './components/TextField'
import { Drawer } from './components/Drawer.ts'
import { Pagination } from './components/Pagination.ts'

let theme = createTheme({
  palette,
  typography,
  components: {
    MuiTextField: { ...TextField },
    MuiDrawer: { ...Drawer },
    MuiPagination: { ...Pagination }
  }
})

// Делаем шрифты адаптивными (автоматически масштабируются)
theme = responsiveFontSizes(theme)

export default theme
