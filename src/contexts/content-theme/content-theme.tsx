import { createContext, useContext } from 'react';

import { ContentThemeProviderProps } from './content-theme.types';

export const ContentThemeContext = createContext<ContentThemeProviderProps>(
  {} as ContentThemeProviderProps
);

export const ContentThemeProvider = ({
  children,
  theme,
}: ContentThemeProviderProps) => {
  return (
    <ContentThemeContext.Provider value={{ theme }}>
      {children}
    </ContentThemeContext.Provider>
  );
};

export const useContentTheme = () =>
  useContext(ContentThemeContext) as ContentThemeProviderProps;
