import InputDetails from './InputDetails/InputDetails';
import InvoiceItems from './InputItems/InvoiceItems';
import InputAccordion from './InputAccordion';
import styles from './styles/sidebar.module.scss';
import { useState } from 'react';
import { Accordion } from '@szhsin/react-accordion';
import InputTheme from './InputTheme/InputTheme';
import DetailsIcon from './Images/icon_details.svg';
import ItemsIcon from './Images/icon_items.svg';
import BillingIcon from './Images/icon_billing.svg';
import ThemeIcon from './Images/icon_theme.svg';

const InvoiceForm = () => {
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
          icon={<DetailsIcon />}
          id='invoice_details'
          expanded={expanded === 'invoice_details'}
          onChange={handleChange('invoice_details')}
        >
          <InputDetails id='invoice_details' />
        </InputAccordion>
        <InputAccordion
          name='Billing Items'
          id='invoice_items'
          icon={<ItemsIcon />}
          expanded={expanded === 'invoice_items'}
          onChange={handleChange('invoice_items')}
        >
          <InvoiceItems />
        </InputAccordion>
        <InputAccordion
          name='Billing Details'
          id='invoice_billing'
          icon={<BillingIcon />}
          expanded={expanded === 'invoice_billing'}
          onChange={handleChange('invoice_billing')}
        >
          Hi
        </InputAccordion>
        <InputAccordion
          name='Logo and Colours'
          id='invoice_theme'
          icon={<ThemeIcon />}
          expanded={expanded === 'invoice_theme'}
          onChange={handleChange('invoice_theme')}
        >
          <InputTheme />
        </InputAccordion>
      </Accordion>
    </>
  );
};

export default InvoiceForm;
