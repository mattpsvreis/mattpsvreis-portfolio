import { FC, ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return <>{children}</>;
};
