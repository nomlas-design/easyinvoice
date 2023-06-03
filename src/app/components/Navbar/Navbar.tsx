'use client';

import styles from './styles/navbar.module.scss';

import { useEffect, useState } from 'react';

import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import PagesIcon from '@mui/icons-material/Pages';
import Button from '@mui/material/Button';

const Navbar = () => {
  // Swap icons on darkmode toggle

  const [darkMode, setDarkMode] = useState(false);
  const [fading, setFading] = useState(false);
  const handleDarkModeToggle = () => {
    setFading(true);
  };

  useEffect(() => {
    if (fading) {
      const timer = setTimeout(() => {
        setDarkMode(!darkMode);
        setFading(false);
      }, 250); // This should match the animation duration in your CSS
      return () => clearTimeout(timer);
    }
  }, [fading, darkMode]);

  return (
    <div className='wrapper'>
      <nav className={styles.nav}>
        <a className={styles.nav__logo} href='#'>
          <PagesIcon sx={{ fontSize: 38 }} />
          NeatReceipt
        </a>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__item}>
            <div className={styles.nav__list__item__link}>
              {darkMode ? (
                <Button
                  id='lightmode'
                  className={fading ? 'fade-out' : ''}
                  onClick={handleDarkModeToggle}
                >
                  <LightModeIcon sx={{ fontSize: 38 }} />
                </Button>
              ) : (
                <Button
                  id='darkmode'
                  className={fading ? 'fade-out' : ''}
                  onClick={handleDarkModeToggle}
                >
                  <DarkModeIcon id='#darkmode' sx={{ fontSize: 38 }} />
                </Button>
              )}
            </div>
          </li>
          <li className={styles.nav__list__item}>
            <a className={styles.nav__list__item__link} href='#'>
              <Button id='contact'>
                <ContactSupportIcon sx={{ fontSize: 38 }} />
              </Button>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
