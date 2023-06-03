'use client';

import InvoiceForm from './InvoiceForm';
import { useEffect, useState } from 'react';

interface FormWrapperProps {
  onFormDataChange: (newFormData: Record<string, string> | null) => void;
}

export default function FormWrapper({ onFormDataChange }: FormWrapperProps) {
  const [formData, setFormData] = useState<Record<string, string> | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === '' && formData) {
      const { [e.target.name]: _, ...rest } = formData;
      const allValuesEmpty = Object.values(rest).every((value) => value === '');
      const newFormData = allValuesEmpty ? null : rest;
      setFormData(newFormData);
      onFormDataChange(newFormData); // Pass the new formData to the parent
    } else {
      const newFormData = { ...formData, [e.target.name]: e.target.value };
      setFormData(newFormData);
      onFormDataChange(newFormData); // Pass the new formData to the parent
    }
  };

  const handleColourChange = (colour: string) => {
    const newFormData = { ...formData, colour };
    setFormData(newFormData);
    onFormDataChange(newFormData); // Pass the new formData to the parent
  };

  useEffect(() => {
    // fill form data with default values
    const defaultFormData = {
      invoice_number: '123456',
      purchase_order: '987654',
      company_name: 'Company Name',
      email: 'declan@nomlas.design',
    };
    setFormData(defaultFormData);
  }, []);

  return (
    <InvoiceForm
      onUserInput={handleInputChange}
      onColourChange={handleColourChange}
    />
  );
}
