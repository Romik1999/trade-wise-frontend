import { createTheme } from '@mui/material/styles';
import palette from './palette';
import { typography } from './typography';
import { responsiveFontSizes } from '@mui/material';
import { TextField } from './components/TextField';

let theme = createTheme({
  palette,
  typography,
  components: {
    MuiTextField: { ...TextField },
  },
});

// Делаем шрифты адаптивными (автоматически масштабируются)
theme = responsiveFontSizes(theme);

export default theme;
