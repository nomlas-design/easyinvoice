'use client';

import './styles/globals.scss';
import { Poppins } from 'next/font/google';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Navbar from './components/Navbar/Navbar';

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#1D1D1D',
    },
    secondary: {
      main: '#F2F2F2',
    },
  },
  typography: {
    fontFamily: 'Poppins, sans-serif',
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider theme={theme}>
        <body className={poppins.className}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
