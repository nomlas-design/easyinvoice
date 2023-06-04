import styles from '../styles/sidebar.module.scss';

import InputDetail from './InputDetail';
import DateInput from './DateInput';

interface Props {
  id: string;
  expanded: boolean;
}

const InputDetails = ({ id, expanded }: Props) => {
  return (
    <form
      id={id}
      aria-labelledby={id}
      className={`${styles.inputdetails} ${styles.accordion__body}`}
    >
      <InputDetail
        label='Company Name'
        id='company_name'
        type='text'
        placeholder='NeatReceipt'
      />
      <InputDetail
        label='Email'
        id='email'
        type='email'
        placeholder='you@example.com'
      />
      <InputDetail
        label='Invoice Number'
        id='invoice_number'
        type='text'
        placeholder='INV-1234'
      />
      <InputDetail
        label='Purchase Order'
        id='purchase_order'
        type='text'
        placeholder='PO-9876'
      />
      <InputDetail
        label='Company Details'
        id='company_details'
        type='textarea'
        placeholder=''
      />
      <InputDetail
        label='Bill To'
        id='bill_to'
        type='textarea'
        placeholder=''
      />
      <DateInput id='invoice_date' label='Invoice Date' />
      <DateInput id='due_date' label='Due Date' />
    </form>
  );
};
export default InputDetails;
