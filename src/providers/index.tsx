import { FC, ReactNode } from 'react';

import { CONTENT_THEME } from '@/constants/content-theme';
import { ContentThemeProvider } from '@/contexts/content-theme';
import resolveConfig from 'tailwindcss/resolveConfig';

import { TailwindConfig } from '../../tailwind.config';

interface ProvidersProps {
  children: ReactNode;
}

const tailwindTheme = resolveConfig(TailwindConfig);

export const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ContentThemeProvider
      theme={{
        logo: CONTENT_THEME.logo,
        light_logo: CONTENT_THEME.light_logo,
        favicon: CONTENT_THEME.favicon,
        loading_icon: CONTENT_THEME.loading_icon,
        project_name: CONTENT_THEME.project_name,
        cover_image: CONTENT_THEME.cover_image,
        tailwind: tailwindTheme,
      }}
    >
      {children}
    </ContentThemeProvider>
  );
};
