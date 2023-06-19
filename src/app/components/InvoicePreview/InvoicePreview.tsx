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
import useInputStore, { FieldKeys } from '@/app/stores/inputStore';

const InvoicePreview = ({
  inputDetails,
}: {
  inputDetails: Record<string, string>;
}) => {
  const fields = useInputStore((state) => state.fields);

  const showOverlay = !Object.entries(fields).some(
    ([key, value]) =>
      value.trim() !== '' && key !== 'currency' && key !== 'billing_method'
  );

  const formatTextArea = (text: string) => {
    return text.replace(/\n/g, '<br />');
  };

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
                    {fields.company_name || 'Company Name'}
                  </div>
                  <div className={styles.invoicepreview__email}>
                    {fields.email || 'you@example.com'}
                  </div>
                </div>
              </div>
              <div className={styles.invoicepreview__row__item}>
                <div
                  className={styles.invoicepreview__company_details}
                  dangerouslySetInnerHTML={{
                    __html:
                      formatTextArea(fields.company_details) ||
                      'Company Details',
                  }}
                ></div>
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
};

export default InvoicePreview;
