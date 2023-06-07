'use client';

import styles from './styles/home.module.scss';
import FormWrapper from './components/InvoiceForm/FormWrapper';
import InvoicePreview from './components/InvoicePreview/InvoicePreview';
import Footer from './components/Footer/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState<Record<string, string> | null>(null);

  const handleFormDataChange = (newFormData: Record<string, string> | null) => {
    setFormData(newFormData);
  };

  return (
    <main className={styles.appgrid}>
      <FormWrapper onFormDataChange={handleFormDataChange} />
      <InvoicePreview formData={formData} />
      <Footer />
    </main>
  );
}
