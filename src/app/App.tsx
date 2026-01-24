import { ThemeProvider } from '@mui/material'
import theme from '../shared/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import Router from './routes'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { useState } from 'react'
import { ru } from 'date-fns/locale/ru'

function App() {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
          <RouterProvider router={Router} />
          {/*<ReactQueryDevtools initialIsOpen={false} />*/}
        </LocalizationProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
