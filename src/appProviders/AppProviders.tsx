import { ThemeProvider } from '@emotion/react';
import { GlobalStyles, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux/es/exports';
import { AppProvidersProps } from 'appProviders/AppProviders.types';
import { Colors, theme } from 'styles/theme';
import { store } from 'store';

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={{
            body: { backgroundColor: Colors.body_bg, color: Colors.primary },
          }}
        />
        {children}
      </ThemeProvider>
    </Provider>
  );
};
