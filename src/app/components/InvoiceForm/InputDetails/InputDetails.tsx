import styles from '../styles/sidebar.module.scss';
import useInputStore from '@/app/stores/inputStore';
import { FieldKeys } from '@/app/stores/inputStore';

import InputDetail from './InputDetail';
import DateInput from './DateInput';

import '/node_modules/flag-icons/css/flag-icons.min.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
  id: any;
}

const InputDetails = ({ id }: Props) => {
  const currency = useInputStore((state) => state.getField(state, 'currency'));
  const billingMethod = useInputStore((state) =>
    state.getField(state, 'billing_method')
  );
  const setField = useInputStore((state) => state.setField);

  const handleSelectChange = (e: SelectChangeEvent<string>) => {
    setField(e.target.name as FieldKeys, e.target.value);
  };

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
      <div className={styles.inputdetails__input}>
        <InputLabel className='label' id='currency-select-label'>
          Currency
        </InputLabel>
        <Select
          labelId='currency-select-label'
          id='currency'
          name='currency'
          value={currency}
          onChange={handleSelectChange}
          className={styles.inputdetails__icon}
        >
          <MenuItem className={styles.inputdetails__icon} value={'AUD'}>
            <span className='fi fi-au' />
            AUD
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'USD'}>
            <span className='fi fi-us' />
            USD
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'NZD'}>
            <span className='fi fi-nz' />
            NZD
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'EUR'}>
            <span className='fi fi-eu' />
            EUR
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'GBP'}>
            <span className='fi fi-gb' />
            GBP
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'JPY'}>
            <span className='fi fi-jp' />
            JPY
          </MenuItem>
        </Select>
      </div>
      <div className={styles.inputdetails__input}>
        <InputLabel className='label' id='billing-method-label'>
          Billing Method
        </InputLabel>
        <Select
          labelId='billing-method-label'
          id='billing_method'
          name='billing_method'
          value={billingMethod}
          onChange={handleSelectChange}
        >
          <MenuItem value={'hours'}>Hours</MenuItem>
          <MenuItem value={'units'}>Units</MenuItem>
        </Select>
      </div>
    </form>
  );
};
export default InputDetails;
