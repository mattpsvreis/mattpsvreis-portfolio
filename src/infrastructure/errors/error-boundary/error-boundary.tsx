import { ReactNode, useEffect, useState } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = () => {
      setHasError(true);
    };
    window.addEventListener('error', errorHandler);
    return () => window.removeEventListener('error', errorHandler);
  }, []);

  return hasError ? (
    <div className='flex h-screen w-screen items-center justify-center'>
      <p>Ops, ocorreu um erro.</p>
      <p>
        Clique <a href='/'>aqui</a> para retornar a home.
      </p>
    </div>
  ) : (
    children
  );
}
