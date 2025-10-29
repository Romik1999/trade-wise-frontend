import { ThemeProvider } from '@mui/material'
import theme from '../shared/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'
import React from 'react'

function App() {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
