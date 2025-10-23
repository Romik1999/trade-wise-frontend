import { Box, Stack, Typography } from '@mui/material'
import AppLogo from './../../assets/images/app-logo.png'
import LoginForm from '../../features/auth/ui/LoginForm.tsx'

const Login = () => {
  return (
    <Box
      padding="10px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      height="100%"
      sx={{
        background:
                'linear-gradient(45deg, #5A2C87 0%, #00B0E6 50%, #28B181 100%)'
      }}
    >
      <Stack
        spacing={2}
        margin="auto"
        maxWidth="450px"
        width="100%"
        padding="20px"
        borderRadius="10px"
        sx={{
          backgroundColor: '#FFF'
        }}
      >
        <img
          src={AppLogo}
          alt="app-logo"
          loading="lazy"
          style={{ width: '125px', height: '125px', objectFit: 'contain', margin: '0 auto' }}
        />

        <Typography variant="h3" color="textPrimary" textAlign="center">
            Enter in Trade Wise
        </Typography>

        <LoginForm/>
      </Stack>
    </Box>
  )
}
export default Login
