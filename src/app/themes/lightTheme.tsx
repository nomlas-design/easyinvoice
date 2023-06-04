import { createTheme } from '@mui/material';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

console.log(poppins.style.fontFamily);

export const lightTheme = createTheme({
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
