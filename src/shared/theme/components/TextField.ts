import theme from '../index'

export const TextField = {
  styleOverrides: {
    root: () => {
      const { palette } = theme
      return {
        '&:before, &:after': {
          display: 'none'
        },
        '& .MuiInputBase-input': {
          height: '48px',
          padding: '12px 16px',
          borderRadius: '10px',
          boxSizing: 'border-box',
          color: `${palette.common.black}`,
          transition: '0.2s',
          background: 'transparent!important',

          '&:placeholder': {
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '140%'
          }
        },
        '& .MuiFormLabel-root': {
          transform: 'translate(20px, 16px) scale(1)',
          color: palette.primary.main,
          fontSize: '14px',
          lineHeight: '120%',
          padding: '0 2px',

          '&.MuiInputLabel-shrink': {
            transform: 'translate(11px, -6px) scale(0.9)',
            color: `${palette.primary.main}`
          },
          '&.Mui-error': {
            color: palette.error.main
          }
        },
        '& .MuiFormLabel-asterisk': {
          color: palette.error.main
        }
      }
    }
  }
}
