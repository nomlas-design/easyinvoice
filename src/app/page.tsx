'use client';

import styles from './styles/home.module.scss';
import FormWrapper from './components/InvoiceForm/FormWrapper';
import InvoicePreview from './components/InvoicePreview/InvoicePreview';
import { useEffect, useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState<Record<string, string> | null>(null);

  const handleFormDataChange = (newFormData: Record<string, string> | null) => {
    setFormData(newFormData);
  };

  return (
    <main>
      <div className='wrapper'>
        <div className='container'>
          <div className={styles.appwrap}>
            <FormWrapper onFormDataChange={handleFormDataChange} />
            <InvoicePreview formData={formData} />
          </div>
        </div>
      </div>
    </main>
  );
}
