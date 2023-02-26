import { CssBaseline } from '@mui/material';
import { AppProvidersProps } from 'appProviders/AppProviders.types';

export const AppProviders = ({children} : AppProvidersProps) => {
  return (
    <>
        <CssBaseline />
        {children}
    </>
  );
};

