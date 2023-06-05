import InputDetails from './InputDetails/InputDetails';
import InputAccordion from './InputAccordion';
import { useState } from 'react';

const InvoiceForm = () => {
  // only allow one accordion to be open at a time
  const [expanded, setExpanded] = useState<string | false>('invoice_details');

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <InputAccordion
        name='Invoice Details'
        id='invoice_details'
        expanded={expanded === 'invoice_details'}
        onChange={handleChange('invoice_details')}
      >
        <InputDetails
          id='invoice_details'
          expanded={expanded === 'invoice_details'}
        />
      </InputAccordion>
      <InputAccordion
        name='Billing Items'
        id='invoice_items'
        expanded={expanded === 'invoice_items'}
        onChange={handleChange('invoice_items')}
      >
        Hi
      </InputAccordion>
      <InputAccordion
        name='Logo and Colours'
        id='invoice_theme'
        expanded={expanded === 'invoice_theme'}
        onChange={handleChange('invoice_theme')}
      >
        Hi
      </InputAccordion>
    </>
  );
};

export default InvoiceForm;
