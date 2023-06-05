import { createTheme } from '@mui/material';

export const lightTheme = createTheme({
  // set primary and secondary colors

  palette: {
    primary: {
      main: '#f9a124',
    },
    secondary: {
      main: '#333322',
    },
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 14,
    // etc
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          input: {
            // input padding
            padding: '0.6rem 0.8rem',
          },
        },
      },
    },
  },
});
