import { RouterProvider } from 'react-router-dom';
import Router from './routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NotificationProvider } from '../shared/providers/notification';

export function App() {
  const queryClient = new QueryClient();

  return (
    <NotificationProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
      </QueryClientProvider>
    </NotificationProvider>
  );
}

export default App;
