'use client';

import styles from './styles/home.module.scss';
import FormWrapper from './components/InvoiceForm/FormWrapper';
import InvoicePreview from './components/InvoicePreview/InvoicePreview';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [inputDetails, setInputDetails] = useState<Record<string, string>>({});
  const [currency, setCurrency] = useState<string>('AUD');
  const [billingMethod, setBillingMethod] = useState<string>('Hourly');

  const handleInputChange = (id: string, value: string) => {
    if (id === 'currency') {
      setCurrency(value);
    } else if (id === 'billing_method') {
      setBillingMethod(value);
    }

    setInputDetails((prevState) => {
      const newState = { ...prevState, [id]: value };
      return value === '' ? (delete newState[id], newState) : newState;
    });
  };

  useEffect(() => {
    console.log(inputDetails);
  }, [inputDetails]);

  return (
    <main className={styles.appgrid}>
      <FormWrapper
        onInputChange={handleInputChange}
        currency={currency}
        billingMethod={billingMethod}
      />
      <InvoicePreview inputDetails={inputDetails} />
      <Footer />
    </main>
  );
}
