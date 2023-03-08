import { createTheme } from '@mui/material';

export const Colors = {
  primary: '#EEEEEE',
  secondary: '#393E46',
  body_bg: '#001A38',
  darker_blue: '#00224E',
  dark_blue: '#003367',
  standsOut: '#FAD61D',
};

export const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 690,
      md: 900,
      lg: 1299,
      xl: 1536
    }
  }
});
