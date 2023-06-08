'use client';

import styles from './styles/home.module.scss';
import FormWrapper from './components/InvoiceForm/FormWrapper';
import InvoicePreview from './components/InvoicePreview/InvoicePreview';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData((prevState) => {
      const newState = { ...prevState, [id]: value };
      return value === '' ? (delete newState[id], newState) : newState;
    });
  };

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <main className={styles.appgrid}>
      <FormWrapper onInputChange={handleInputChange} />
      <InvoicePreview formData={formData} />
      <Footer />
    </main>
  );
}
