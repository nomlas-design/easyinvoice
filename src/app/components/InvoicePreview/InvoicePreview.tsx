// eslint-disable-next-line react/no-unescaped-entities

'use client';

import styles from './styles/preview.module.scss';
import Arrow from './arrow_curve.svg';

import {
  generateBackground,
  generateTextBackgroundColour,
  generateTextColour,
} from '../../lib/configureColours';

import { CSSTransition } from 'react-transition-group';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function InvoicePreview({
  inputDetails,
}: {
  inputDetails: Record<string, string>;
}) {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const relevantKeys = Object.keys(inputDetails).filter(
      (key) => key !== 'currency' && key !== 'billing_method'
    );
    !inputDetails || relevantKeys.length === 0
      ? setShowOverlay(true)
      : setShowOverlay(false);
  }, [inputDetails]);

  return (
    <div className={styles.invoicepreview__wrap}>
      <div className='wrapper'>
        <div className={`container ${styles['container--invoicepreview']}`}>
          <div className={styles.invoicepreview}>
            <CSSTransition
              in={showOverlay}
              timeout={300}
              classNames={{
                enter: styles.fadeEnter,
                enterActive: styles.fadeEnterActive,
                exit: styles.fadeExit,
                exitActive: styles.fadeExitActive,
              }}
              unmountOnExit
            >
              <div className={styles.invoicepreview__initial}>
                <Arrow
                  fill='red'
                  className={styles.invoicepreview__initial__arrow}
                />
                <h1>Let&#39;s create your invoice!</h1>
                <span> Start adding details to get started.</span>
              </div>
            </CSSTransition>
            <div
              className={`${styles.invoicepreview__row} ${styles.invoicepreview__fontlight}`}
            >
              <div className={styles.invoicepreview__row__item}>
                <div className={styles.invoicepreview__logo}>
                  <Image
                    src='/images/logo_2.svg'
                    alt={inputDetails ? inputDetails.company_name : 'Logo'}
                    fill={true}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.invoicepreview__column}>
                  <div className={styles.invoicepreview__company}>
                    {inputDetails.company_name || 'NeatReceipt'}
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
              <div className={styles.invoicepreview__box}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
