import styles from '../styles/sidebar.module.scss';

import InputDetail from './InputDetail';
import DateInput from './DateInput';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';

interface Props {
  id: string;
  onInputChange: (id: string, value: string) => void;
}

const InputDetails = ({ id, onInputChange }: Props) => {
  const [currency, setCurrency] = useState('AUD');
  const [billingMethod, setBillingMethod] = useState('Hourly');

  const handleCurrencyChange = (event: SelectChangeEvent) => {
    setCurrency(event.target.value as string);
  };

  const handleBillingMethodChange = (event: SelectChangeEvent) => {
    setBillingMethod(event.target.value as string);
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
        onInputChange={onInputChange}
      />
      <InputDetail
        label='Email'
        id='email'
        type='email'
        placeholder='you@example.com'
        onInputChange={onInputChange}
      />
      <InputDetail
        label='Invoice Number'
        id='invoice_number'
        type='text'
        placeholder='INV-1234'
        onInputChange={onInputChange}
      />
      <InputDetail
        label='Purchase Order'
        id='purchase_order'
        type='text'
        placeholder='PO-9876'
        onInputChange={onInputChange}
      />
      <InputDetail
        label='Company Details'
        id='company_details'
        type='textarea'
        placeholder=''
        onInputChange={onInputChange}
      />
      <InputDetail
        label='Bill To'
        id='bill_to'
        type='textarea'
        placeholder=''
        onInputChange={onInputChange}
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
          value={currency}
          onChange={handleCurrencyChange}
        >
          <MenuItem value={'AUD'}>AUD</MenuItem>
          <MenuItem value={'USD'}>USD</MenuItem>
          <MenuItem value={'EUR'}>EUR</MenuItem>
          <MenuItem value={'GBP'}>GBP</MenuItem>
          <MenuItem value={'JPY'}>JPY</MenuItem>
        </Select>
      </div>
      <div className={styles.inputdetails__input}>
        <InputLabel className='label' id='billing-method-label'>
          Billing Method
        </InputLabel>
        <Select
          labelId='billing-method-label'
          id='billing_method'
          value={billingMethod}
          onChange={handleBillingMethodChange}
        >
          <MenuItem value={'Hourly'}>Hours</MenuItem>
          <MenuItem value={'Units'}>Units</MenuItem>
        </Select>
      </div>
    </form>
  );
};
export default InputDetails;
