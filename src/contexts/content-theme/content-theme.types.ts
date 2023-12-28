import { PropsWithChildren } from 'react';

export type CustomThemeTemplateProps = {
  theme: {
    logo: string;
    light_logo: string;
    favicon: string;
    loading_icon: string;
    project_name: string;
    cover_image: string;
    tailwind: any;
  };
};

export type ContentThemeProviderProps = CustomThemeTemplateProps &
  PropsWithChildren;
