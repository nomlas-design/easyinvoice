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
          background: '#fff',
          input: {
            padding: '0.6rem 0.8rem',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          padding: '0.6rem 0.8rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '0.5rem',
        },
      },
    },
    // Tooltips
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '0.8rem',
          padding: '0.5rem 1rem',
          borderRadius: '0.5rem',
          backgroundColor: '#fff',
          color: '#333322',
        },
        arrow: {
          color: '#fff',
        },
      },
    },
  },
});
