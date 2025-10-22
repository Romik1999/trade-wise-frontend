import { darken, lighten } from '@mui/material'

const palette = {
  primary: {
    main: '#5A2C87',
    dark: darken('#5A2C87', 0.5),
    light: lighten('#5A2C87', 0.5)
  },
  secondary: {
    main: '#00B0E6'
  },

  success: {
    main: '#28B181'
  },
  background: {
    default: '#FFFFFF',
    sidebar: '#1D204A'
  },
  text: {
    primary: '#272B62',
    secondary: '#FFFFFF'
  },
  white: {
    main: '#FFFFFF'
  },
  error: {
    main: '#D32F2F'
  }
}

export default palette
