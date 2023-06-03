'use client';

import styles from './styles/preview.module.scss';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import { darken } from 'polished';

export default function InvoicePreview({
  formData,
}: {
  formData: Record<string, string> | null;
}) {
  const [background, setBackground] = useState<string>('#1D1D1D');

  useEffect(() => {
    generateBackground(formData ? formData.colour : '#1D1D1D');
  }, [formData]);

  const generateBackground = (colour: string) => {
    console.log(colour);
    if (colour === '#ffffff') {
      setBackground(colour);
    } else {
      const darkerColour = darken(0.15, colour);
      setBackground(
        `linear-gradient(125deg, ${colour} 0%, ${darkerColour} 100%)`
      );
    }
  };

  return (
    <>
      <div className={styles.invoicepreview}>
        <div
          className={`${styles.invoicepreview__row} ${styles.invoicepreview__fontlight}`}
        >
          <div className={styles.invoicepreview__row__item}>
            <div className={styles.invoicepreview__logo}>
              <Image
                src='/images/logo.png'
                alt={formData ? formData.company_name : 'Logo'}
                fill={true}
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.invoicepreview__column}>
              <div className={styles.invoicepreview__company}>
                {formData ? formData.company_name : 'Nomlas Design'}
              </div>
              <div className={styles.invoicepreview__email}>
                declan@nomlas.design
              </div>
            </div>
          </div>
          <div className={styles.invoicepreview__row__item}>
            <div className={styles.invoicepreview__company_details}>
              22 Bayles Street <br />
              Parkville VIC 3052
            </div>
          </div>
        </div>
        <div className={styles.invoicepreview__row}>
          <div
            style={{ background: background }}
            className={styles.invoicepreview__box}
          ></div>
        </div>
      </div>
    </>
  );
}
