'use client';

import './styles/globals.scss';
import styles from './styles/home.module.scss';
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './themes/lightTheme';
import { Poppins } from 'next/font/google';

import Navbar from './components/Navbar/Navbar';
import Head from 'next/head';

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
      <Head>
        <title>NeatReceipt | Free Invoice Generator</title>
        <meta
          name='description'
          content='Dynamically generate and download PDF invoices for free.'
        />
        <meta name='keywords' content='invoice, freelancer, free' />
        <meta name='author' content='Nomlas Design' />
        <meta
          property='og:title'
          content='NeatReceipt | Free Invoice Generator'
          key='title'
        />
      </Head>
      <ThemeProvider theme={lightTheme}>
        <body className={`${styles.app} ${poppins.className}`}>
          <Navbar />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
