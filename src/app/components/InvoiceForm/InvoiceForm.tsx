import InputDetails from './InputDetails/InputDetails';
import InvoiceItems from './InputItems/InvoiceItems';
import InputAccordion from './InputAccordion';
import styles from './styles/sidebar.module.scss';
import { useState } from 'react';
import { Accordion } from '@szhsin/react-accordion';

interface InvoiceFormProps {
  onInputChange: (id: string, value: string) => void;
}

const InvoiceForm = ({ onInputChange }: InvoiceFormProps) => {
  // only allow one accordion to be open at a time
  const [expanded, setExpanded] = useState<string | false>('invoice_details');

  const handleChange =
    (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      <Accordion
        className={styles.accordion}
        transition
        transitionTimeout={250}
      >
        <InputAccordion
          name='Invoice Details'
          id='invoice_details'
          expanded={expanded === 'invoice_details'}
          onChange={handleChange('invoice_details')}
        >
          <InputDetails id='invoice_details' onInputChange={onInputChange} />
        </InputAccordion>
        <InputAccordion
          name='Billing Items'
          id='invoice_items'
          expanded={expanded === 'invoice_items'}
          onChange={handleChange('invoice_items')}
        >
          <InvoiceItems id='invoice_items' />
        </InputAccordion>
        <InputAccordion
          name='Logo and Colours'
          id='invoice_theme'
          expanded={expanded === 'invoice_theme'}
          onChange={handleChange('invoice_theme')}
        >
          Hi
        </InputAccordion>
      </Accordion>
    </>
  );
};

export default InvoiceForm;
