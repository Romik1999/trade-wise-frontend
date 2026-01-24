import { createTheme } from '@mui/material/styles'
import palette from './palette'
import { typography } from './typography'
import { responsiveFontSizes } from '@mui/material'
import { TextField } from './components/TextField'
import { Drawer } from './components/Drawer.ts'
import { Pagination } from './components/Pagination.ts'
import { TableRow } from './components/TableRow.ts'

let theme = createTheme({
  palette,
  typography,
  components: {
    MuiTextField: { ...TextField },
    MuiDrawer: { ...Drawer },
    MuiPagination: { ...Pagination },
    MuiTableRow: { ...TableRow }
  }
})

// Делаем шрифты адаптивными (автоматически масштабируются)
theme = responsiveFontSizes(theme)

export default theme
