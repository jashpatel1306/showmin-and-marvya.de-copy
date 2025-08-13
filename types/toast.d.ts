import { ReactNode } from 'react';

declare module '@/components/ui/use-toast' {
  export interface ToastType {
    title: string;
    description?: string;
    variant?: 'default' | 'destructive';
  }

  export function useToast(): {
    showToast: (toast: ToastType) => void;
    Toast: () => JSX.Element | null;
  };
}
