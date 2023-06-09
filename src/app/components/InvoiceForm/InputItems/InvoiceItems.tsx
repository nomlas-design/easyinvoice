import { useState } from 'react';
import styles from '../styles/sidebar.module.scss';
import InvoiceItem, { InvoiceItemProps } from './InvoiceItem';
import Add from '../Images/add.svg';

import Tooltip from '@mui/material/Tooltip';
import Fade from '@mui/material/Fade';

const InvoiceItems = () => {
  const [invoiceItems, setInvoiceItems] = useState<InvoiceItemProps[]>([
    {
      id: 'invoice_item--1',
      currency: 'AUD',
      billingMethod: 'hours',
      onInputChange: () => {},
    },
  ]);

  const handleAddInvoiceItem = () => {
    const newItem = {
      id: `invoice_item--${invoiceItems.length + 1}`,
      currency: 'USD',
      billingMethod: 'hours',
      onInputChange: () => {},
    };
    setInvoiceItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveInvoiceItem = (id: string) => {
    setInvoiceItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setInvoiceItems((prevItems) =>
      prevItems.map((item, index) => ({
        ...item,
        id: `invoice_item--${index + 1}`,
      }))
    );
  };

  return (
    <div className={styles.inputitems}>
      {invoiceItems.map((item) => (
        <InvoiceItem
          key={item.id}
          {...item}
          onInputChange={handleRemoveInvoiceItem}
          onRemove={handleRemoveInvoiceItem}
        />
      ))}
      <Tooltip
        title='Add Item'
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 400 }}
        arrow
      >
        <button
          className={`btn ${styles.inputitems__add}`}
          onClick={handleAddInvoiceItem}
        >
          <Add />
        </button>
      </Tooltip>
    </div>
  );
};

export default InvoiceItems;
