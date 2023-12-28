import { PropsWithChildren } from 'react';

export type CustomThemeTemplateProps = {
  theme: {
    favicon: string;
    loading_icon: string;
    project_name: string;
    tailwind: any;
  };
};

export type ContentThemeProviderProps = CustomThemeTemplateProps &
  PropsWithChildren;
