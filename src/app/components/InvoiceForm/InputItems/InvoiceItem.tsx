import styles from '../styles/sidebar.module.scss';
import InputDetail from '../InputDetails/InputDetail';
import Delete from './delete.svg';
import CurrencyInput from 'react-currency-input-field';
import useInputStore, {
  InvoiceItem as InvoiceItemType,
} from '@/app/stores/inputStore';
import { type } from 'os';
import { useEffect } from 'react';

interface Props {
  item: InvoiceItemType;
  isFocused: boolean;
  setFocusedItem: (id: string) => void;
}

const InvoiceItem = ({ item, isFocused, setFocusedItem }: Props) => {
  const setInvoiceItemField = useInputStore(
    (state) => state.setInvoiceItemField
  );
  const removeInvoiceItem = useInputStore((state) => state.removeInvoiceItem);

  const handleItemDescriptionChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInvoiceItemField(item.id, 'description', event.target.value);
  };

  const handleRateChange = (value: string | undefined) => {
    if (value !== undefined) {
      setInvoiceItemField(item.id, 'rate', parseFloat(value));
    } else {
      setInvoiceItemField(item.id, 'rate', 0);
    }
  };

  const handleQuanityChange = (value: string) => {
    const numberValue = parseInt(value, 10);

    if (!isNaN(numberValue)) {
      setInvoiceItemField(item.id, 'quantity', numberValue);
    } else {
      setInvoiceItemField(item.id, 'quantity', 0);
    }
  };

  const handleFocus = () => {
    setFocusedItem(item.id);
  };

  const handleBlur = () => {
    setFocusedItem(null);
  };

  const itemStyles = isFocused ? styles.focused : styles.blurred;

  useEffect(() => {
    if (item.quantity && item.rate) {
      const total = item.quantity * item.rate;
      setInvoiceItemField(item.id, 'total', total.toString());
    }
  }, [item.quantity, item.rate, item.id, setInvoiceItemField]);

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
          <label htmlFor={''}>Rate/Hour</label>
          <CurrencyInput
            id={`${item.id}_item_rate`}
            placeholder='$0.00'
            allowDecimals={true}
            min={0}
            prefix={'$'}
            step={10}
            value={item.rate}
            onValueChange={handleRateChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.inputdetails__input}>
          <label htmlFor={''}>Hours</label>
          <input
            id={`${item.id}_item_units`}
            type='number'
            min={0}
            placeholder='0'
            value={item.quantity || ''}
            onChange={(e) => handleQuanityChange(parseInt(e.target.value))}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <div className={styles.inputdetails__input}>
          <label htmlFor={''}>Total</label>
          <CurrencyInput
            id={`${item.id}_item_total`}
            placeholder='$0.00'
            allowDecimals={true}
            prefix={'$'}
            step={10}
            value={item.total}
            disabled={true}
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
