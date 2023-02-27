import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, CssBaseline } from '@mui/material';
import { AppProvidersProps } from 'appProviders/AppProviders.types';
import { Colors, theme } from 'styles/theme';


export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
          styles={{
            body: { backgroundColor: Colors.body_bg, color: Colors.primary },
          }}
      />
      {children}
    </ThemeProvider>
  );
};
