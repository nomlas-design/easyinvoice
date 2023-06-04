'use client';

import './styles/globals.scss';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './themes/lightTheme';
import { Poppins } from 'next/font/google';

import Navbar from './components/Navbar/Navbar';

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ThemeProvider theme={lightTheme}>
        <body className={poppins.className}>
          {/* <Navbar /> */}
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
