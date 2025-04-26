import React, { createContext, useState, useContext, FC } from 'react';
import { Snackbar, Alert } from '@mui/material';
import {
  NotificationContextType,
  NotificationProviderProps,
  NotificationState,
  SeverityType,
} from './types';

const NotificationContext = createContext<NotificationContextType | null>(null);

export const NotificationProvider: FC<NotificationProviderProps> = ({
  children,
}) => {
  const [notification, setNotification] = useState<NotificationState>({
    open: false,
    message: '',
    severity: 'success',
  });

  const showNotification = (
    message: string,
    severity: SeverityType = 'success'
  ) => {
    setNotification({ open: true, message, severity });
  };

  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <NotificationContext.Provider value={{ showNotification }}>
      {children}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleClose}
          severity={notification.severity}
          variant="filled"
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification должен использоваться внутри NotificationProvider");
  }
  return context;
};