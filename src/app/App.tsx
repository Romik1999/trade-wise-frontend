import { ThemeProvider } from '@mui/material'
import theme from '../shared/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'

function App() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
