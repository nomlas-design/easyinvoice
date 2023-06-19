import useInputStore, {
  InvoiceItem as InvoiceItemType,
} from '@/app/stores/inputStore';
import styles from '../styles/sidebar.module.scss';

import InvoiceItem from './InvoiceItem';
import { useState } from 'react';

const InvoiceItems = () => {
  const invoiceItems = useInputStore((state) => state.invoiceItems);
  const addInvoiceItem = useInputStore((state) => state.addInvoiceItem);

  const [focusedItem, setFocusedItem] = useState(null);

  const handleAddInvoiceItem = () => {
    addInvoiceItem();
  };

  return (
    <div className={styles.inputitems}>
      <form>
        {invoiceItems.map((item) => (
          <InvoiceItem
            key={item.id}
            item={item}
            isFocused={item.id === focusedItem}
            setFocusedItem={setFocusedItem}
          />
        ))}
      </form>
      <button
        className={`btn ${styles.inputitems__add}`}
        onClick={handleAddInvoiceItem}
      >
        Add Item
      </button>
    </div>
  );
};

export default InvoiceItems;
