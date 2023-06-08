'use client';

import styles from './styles/sidebar.module.scss';
import InvoiceForm from './InvoiceForm';
import { useEffect, useState } from 'react';

interface FormWrapperProps {
  onInputChange: (id: string, value: string) => void;
}

const FormWrapper = ({ onInputChange }: FormWrapperProps) => {
  return (
    <div className={styles.sidebar}>
      <InvoiceForm onInputChange={onInputChange} />
    </div>
  );
};

export default FormWrapper;
