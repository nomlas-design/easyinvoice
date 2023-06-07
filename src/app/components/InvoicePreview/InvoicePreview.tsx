// eslint-disable-next-line react/no-unescaped-entities

'use client';

import styles from './styles/preview.module.scss';
import {
  generateBackground,
  generateTextBackgroundColour,
  generateTextColour,
} from '../../lib/configureColours';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function InvoicePreview({
  formData,
}: {
  formData: Record<string, string> | null;
}) {
  const [background, setBackground] = useState<string>('#0c0c0c');
  const [textBackgroundColour, setTextBackgroundColour] =
    useState<string>('#ffffff');
  const [textColour, setTextColour] = useState<string>('#0c0c0c');

  useEffect(() => {
    setBackground(generateBackground(formData?.colour));
    setTextBackgroundColour(generateTextBackgroundColour(formData?.colour));
    setTextColour(generateTextColour(formData?.colour));
  }, [formData]);

  return (
    <div className={styles.invoicepreview__wrap}>
      <div className='wrapper'>
        <div className={`container ${styles['container--invoicepreview']}`}>
          {/* <div className={styles.invoicepreview__cta}>
            Generated Preview
            <button className={`btn ${styles.btn__download}`}>
              Download PDF
            </button>
          </div> */}
          <div className={styles.invoicepreview}>
            <div className={styles.invoicepreview__initial}>
              <h1>Let&#39;s create your invoice!</h1>
              <span> Start adding details to get started.</span>
            </div>
            <div
              className={`${styles.invoicepreview__row} ${styles.invoicepreview__fontlight}`}
            >
              <div className={styles.invoicepreview__row__item}>
                <div className={styles.invoicepreview__logo}>
                  <Image
                    src='/images/logo_2.svg'
                    alt={formData ? formData.company_name : 'Logo'}
                    fill={true}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.invoicepreview__column}>
                  <div
                    style={{ color: textColour }}
                    className={styles.invoicepreview__company}
                  >
                    {formData ? formData.company_name : 'NeatReceipt'}
                  </div>
                  <div className={styles.invoicepreview__email}>
                    you@example.com
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
              >
                <h1 style={{ color: textBackgroundColour }}>Text Preview</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
