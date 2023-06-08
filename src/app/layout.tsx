'use client';

import './styles/globals.scss';
import styles from './styles/home.module.scss';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './themes/lightTheme';

import Head from './head';
import Navbar from './components/Navbar/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <Head />
      <ThemeProvider theme={lightTheme}>
        <body className={styles.app}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
