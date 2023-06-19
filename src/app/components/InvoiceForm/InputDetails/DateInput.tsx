import styles from '../styles/sidebar.module.scss';

import useInputStore, { FieldKeys } from '@/app/stores/inputStore';

import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-au';

dayjs.locale('en-au');

interface Props {
  label: string;
  id: string;
}

const DateInput = ({ label, id }: Props) => {
  const startDate = dayjs(
    useInputStore((state) => state.getField(state, id as FieldKeys))
  );
  const setField = useInputStore((state) => state.setField);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
      <div className={styles.inputdetails__input}>
        <label>{label}</label>
        <DatePicker
          value={startDate}
          onChange={(newStartDate: Dayjs | null) => {
            if (newStartDate) {
              setField(id as FieldKeys, newStartDate.format());
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateInput;
