import { ReactNode } from 'react';

export type SeverityType = 'success' | 'info' | 'warning' | 'error'

export type NotificationState = {
  open: boolean;
  message: string;
  severity: SeverityType;
}

export type NotificationContextType = {
  showNotification: (message: string, severity?: SeverityType) => void;
}

export type NotificationProviderProps = {
  children: ReactNode;
}