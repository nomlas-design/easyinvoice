import styles from '../styles/sidebar.module.scss';
import Delete from './delete.svg';
import CurrencyInput from 'react-currency-input-field';
import useInputStore, {
  InvoiceItem as InvoiceItemType,
} from '@/app/stores/inputStore';
import { useEffect, useState } from 'react';

interface Props {
  item: InvoiceItemType;
  isFocused: boolean;
  setFocusedItem: (id: string | null) => void;
}

const InvoiceItem = ({ item, isFocused, setFocusedItem }: Props) => {
  const setInvoiceItemField = useInputStore(
    (state) => state.setInvoiceItemField
  );
  const removeInvoiceItem = useInputStore((state) => state.removeInvoiceItem);

  const labels = useInputStore((state) => state.getLabels(state));
  const prefix = useInputStore((state) => state.getCurrencyPrefix(state));

  useEffect(() => {
    if (item.quantity && item.rate) {
      let total = Number(item.quantity) * Number(item.rate);
      total = Number(total.toFixed(2)); // Round to nearest 2 decimal places
      setInvoiceItemField(item.id, 'total', total.toString());
    }
  }, [item.quantity, item.rate, item.id, setInvoiceItemField]);

  const handleItemDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvoiceItemField(item.id, 'description', event.target.value);
  };

  const handleRateChange = (value: string | undefined) => {
    if (value !== undefined) {
      setInvoiceItemField(item.id, 'rate', value);
    } else {
      setInvoiceItemField(item.id, 'rate', '');
    }
  };

  const handleQuanityChange = (value: string | undefined) => {
    if (value !== undefined) {
      setInvoiceItemField(item.id, 'quantity', value);
    } else {
      setInvoiceItemField(item.id, 'quantity', '');
    }
  };

  const handleFocus = () => {
    setFocusedItem(item.id);
  };

  const handleBlur = () => {
    setFocusedItem(null);
  };

  const itemStyles = isFocused ? styles.focused : styles.blurred;

  const handleRemoveItem = () => {
    removeInvoiceItem(item.id);
  };

  return (
    <div
      className={`${styles.inputdetails} ${styles.accordion__body} ${itemStyles}`}
    >
      <div className={styles.inputdetails__spread}>
        <div className={styles.inputdetails__input}>
          <label htmlFor={`${item.id}_item_description`}>
            Item Description
          </label>
          <input
            id={`${item.id}_item_description`}
            type='text'
            value={item.description || ''}
            onChange={handleItemDescriptionChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
      </div>
      <div className={styles.inputdetails__itemgrid}>
        <div className={styles.inputdetails__input}>
          <label htmlFor={`${item.id}_item_rate`}>{labels[0]}</label>
          <CurrencyInput
            id={`${item.id}_item_rate`}
            placeholder={`${prefix}0.00`}
            allowDecimals={true}
            prefix={prefix}
            step={10}
            value={item.rate}
            onValueChange={handleRateChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.inputdetails__input}>
          <label htmlFor={`${item.id}_item_units`}>{labels[1]}</label>
          <CurrencyInput
            id={`${item.id}_item_units`}
            placeholder='0'
            allowDecimals={true}
            min={0}
            step={10}
            value={item.quantity}
            onValueChange={handleQuanityChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.inputdetails__input}>
          <label htmlFor={''}>Total</label>
          <CurrencyInput
            className={styles['inputdetails__input--readonly']}
            id={`${item.id}_item_total`}
            placeholder='-'
            allowDecimals={true}
            prefix={prefix}
            step={10}
            value={item.total}
            readOnly={true}
          />
        </div>
        <button
          className={styles.inputdetails__delete}
          onClick={handleRemoveItem}
        >
          <Delete />
        </button>
      </div>
    </div>
  );
};

export default InvoiceItem;
