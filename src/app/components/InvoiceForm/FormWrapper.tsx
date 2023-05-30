'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import InvoiceForm from './InvoiceForm';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D1D1D',
    },
    secondary: {
      main: '#F2F2F2',
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '1rem',
          padding: '0.5rem 0.7rem',
        },
      },
    },
  },
});

export default function FormWrapper() {
  return (
    <ThemeProvider theme={theme}>
      <InvoiceForm />
    </ThemeProvider>
  );
}
