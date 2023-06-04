import styles from '../styles/sidebar.module.scss';

import dayjs, { Dayjs } from 'dayjs';
import { Box, Typography } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import 'dayjs/locale/en-au';

dayjs.locale('en-au');

interface Props {
  label: string;
  id: string;
}

const DateInput = ({ label, id }: Props) => {
  const [startDate, setStartDate] = useState(dayjs(new Date()));

  // Need to work out how to label this input
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
      <div className={styles.inputdetails__input}>
        <label>{label}</label>
        <DatePicker
          value={startDate}
          onChange={(newStartDate: Dayjs | null) =>
            newStartDate && setStartDate(newStartDate)
          }
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateInput;
