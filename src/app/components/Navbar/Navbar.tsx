/* eslint-disable @next/next/no-img-element */
'use client';

import styles from './styles/navbar.module.scss';

import { useEffect, useState } from 'react';

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
    <div className={`wrapper ${styles.navwrap}`}>
      <nav className={styles.nav}>
        <a className={styles.nav__logo} href='#'>
          <img src='/images/logo_5.svg' alt='NeatReceipt' />
        </a>
        <ul className={styles.nav__list}>
          <li className={styles.nav__list__item}>
            {darkMode ? (
              <button
                id='lightmode'
                className={fading ? 'fade-out' : ''}
                onClick={handleDarkModeToggle}
              >
                <img
                  className={styles.nav__icon}
                  src='/images/icon_light--white.svg'
                  alt='NeatReceipt'
                />
              </button>
            ) : (
              <button
                id='darkmode'
                className={fading ? 'fade-out' : ''}
                onClick={handleDarkModeToggle}
              >
                <img
                  className={styles.nav__icon}
                  src='/images/icon_dark--white.svg'
                  alt='NeatReceipt'
                />
              </button>
            )}
          </li>
          <li className={styles.nav__list__item}>
            <a className={styles.nav__list__item__link} href='#'>
              <img
                className={styles.nav__icon}
                src='/images/icon_about--white.svg'
                alt='NeatReceipt'
              />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
