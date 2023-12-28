import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'error' | 'success' | 'default' | 'warning' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  variant?: 'outlined' | 'contained';
  rounded?: 'small' | 'full';
  isLoading?: boolean;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}
