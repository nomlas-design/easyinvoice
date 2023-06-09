/* eslint-disable @next/next/no-img-element */
// eslint-disable-next-line react/no-unescaped-entities

'use client';

import styles from './styles/preview.module.scss';
import Arrow from './arrow_curve.svg';

import { CSSTransition } from 'react-transition-group';
import { formatValue } from 'react-currency-input-field';
import Image from 'next/image';
import useInputStore, { FieldKeys } from '@/app/stores/inputStore';

const InvoicePreview = ({
  inputDetails,
}: {
  inputDetails: Record<string, string>;
}) => {
  const fields = useInputStore((state) => state.fields);

  const invoiceItems = useInputStore((state) => state.invoiceItems);

  const backgroundColour = useInputStore((state) => state.colour);

  const textBackgroundColour = useInputStore(
    (state) => state.textBackgroundColour
  );

  const textColour = useInputStore((state) => state.textColour);

  const lighterColour = useInputStore((state) => state.lighterColour);
  const labels = useInputStore((state) => state.getLabels(state));
  const prefix = useInputStore((state) => state.getCurrencyPrefix(state));
  const logo = useInputStore((state) => state.logo);

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
            <div className={styles.invoicepreview__inner}>
              <CSSTransition
                in={false}
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
                  <img
                    className={styles.invoicepreview__logo}
                    src={logo ? logo.url : '/images/logo_2.svg'}
                    alt={inputDetails ? inputDetails.company_name : 'Logo'}
                  />
                  <div className={styles.invoicepreview__column}>
                    <div
                      style={{ color: textColour }}
                      className={styles.invoicepreview__company}
                    >
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
              <div className={styles.invoicepreview__table}>
                <div
                  style={{
                    backgroundColor: lighterColour,
                    color: textBackgroundColour,
                    borderColor: backgroundColour,
                  }}
                  className={`${styles.invoicepreview__row} ${styles.invoicepreview__billingitem} ${styles['invoicepreview__billingitem--head']}`}
                >
                  <span className={styles.textleft}>Description</span>
                  <span>{labels[0]}</span>
                  <span>{labels[1]}</span>
                  <span className={styles.textright}>Sub-Total</span>
                </div>
                {invoiceItems.map((item) => {
                  return (
                    <div
                      className={`${styles.invoicepreview__row} ${styles.invoicepreview__billingitem}`}
                      key={item.id}
                      style={{ borderColor: backgroundColour }}
                    >
                      <span className={styles.textleft}>
                        {item.description !== '' ? item.description : '-'}
                      </span>
                      <span>
                        {prefix}
                        {formatValue({ value: String(item.rate) })}
                      </span>
                      <span>{item.quantity}</span>
                      <span className={styles.textright}>
                        {prefix}
                        {formatValue({ value: String(item.total) })}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div
              style={{ background: backgroundColour }}
              className={styles.invoicepreview__box}
            >
              <h1 style={{ color: textBackgroundColour }}>Text</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicePreview;
