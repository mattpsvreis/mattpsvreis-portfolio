import resolveConfig from 'tailwindcss/resolveConfig';

import { ContentThemeProvider } from './contexts/content-theme/content-theme.js';
import { CONTENT_THEME } from './constants/content-theme.js';
import { TailwindConfig } from '../tailwind.config.js';
import { ErrorBoundary } from './infrastructure/errors/error-boundary/error-boundary.js';


// @ts-ignore
const tailwindTheme = resolveConfig(TailwindConfig);

function App() {
  return (
    <ErrorBoundary>
      <ContentThemeProvider theme={{
    logo: CONTENT_THEME.logo,
    light_logo: CONTENT_THEME.light_logo,
    favicon: CONTENT_THEME.favicon,
    loading_icon: CONTENT_THEME.loading_icon,
    project_name: CONTENT_THEME.project_name,
    cover_image: CONTENT_THEME.cover_image,
    tailwind: tailwindTheme,
  }}></ContentThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
