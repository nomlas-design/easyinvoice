'use client';

import styles from './styles/sidebar.module.scss';
import InvoiceForm from './InvoiceForm';
import { useEffect, useState } from 'react';

interface FormWrapperProps {
  onInputChange: (id: string, value: string) => void;
  currency: string;
  billingMethod: string;
}

const FormWrapper = ({
  onInputChange,
  currency,
  billingMethod,
}: FormWrapperProps) => {
  return (
    <div className={styles.sidebar}>
      <InvoiceForm
        onInputChange={onInputChange}
        currency={currency}
        billingMethod={billingMethod}
      />
    </div>
  );
};

export default FormWrapper;
