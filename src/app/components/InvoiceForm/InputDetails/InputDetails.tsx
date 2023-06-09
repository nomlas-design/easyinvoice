import styles from '../styles/sidebar.module.scss';

import InputDetail from './InputDetail';
import DateInput from './DateInput';

import FlagUs from '../Images/us.svg';
import FlagAu from '../Images/au.svg';
import FlagUk from '../Images/uk.svg';
import FlagEu from '../Images/eu.svg';
import FlagNz from '../Images/nz.svg';
import FlagJp from '../Images/jp.svg';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { Flag } from '@material-ui/icons';

interface Props {
  id: string;
  onInputChange: (id: string, value: string) => void;
}

const InputDetails = ({ id, onInputChange }: Props) => {
  const [currency, setCurrency] = useState('AUD');
  const [billingMethod, setBillingMethod] = useState('hours');

  useEffect(() => {
    // Call onInputChange with initial values when the component mounts
    onInputChange('currency', currency);
    onInputChange('billing_method', billingMethod);
  }, []);

  const handleCurrencyChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setCurrency(value);
    onInputChange('currency', value);
  };

  const handleBillingMethodChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setBillingMethod(value);
    onInputChange('billing_method', value);
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
          className={styles.inputdetails__icon}
        >
          <MenuItem className={styles.inputdetails__icon} value={'AUD'}>
            <FlagAu />
            AUD
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'USD'}>
            <FlagUs />
            USD
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'NZD'}>
            <FlagNz />
            NZD
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'EUR'}>
            <FlagEu />
            EUR
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'GBP'}>
            <FlagUk />
            GBP
          </MenuItem>
          <MenuItem className={styles.inputdetails__icon} value={'JPY'}>
            <FlagJp />
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
          value={billingMethod}
          onChange={handleBillingMethodChange}
        >
          <MenuItem value={'hours'}>Hours</MenuItem>
          <MenuItem value={'units'}>Units</MenuItem>
        </Select>
      </div>
    </form>
  );
};
export default InputDetails;
