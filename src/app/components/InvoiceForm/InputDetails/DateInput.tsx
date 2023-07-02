import styles from '../styles/sidebar.module.scss';

import useInputStore, { DateFieldKeys } from '@/app/stores/inputStore';

import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import 'dayjs/locale/en-au';

dayjs.locale('en-au');

interface Props {
  label: string;
  id: DateFieldKeys;
}

const DateInput = ({ label, id }: Props) => {
  const startDate = dayjs(
    useInputStore((state) => state.getDateField(state, id))
  );
  const setDateField = useInputStore((state) => state.setDateField);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='en-au'>
      <div className={styles.inputdetails__input}>
        <label>{label}</label>
        <DatePicker
          value={startDate}
          onChange={(newStartDate: Dayjs | null) => {
            if (newStartDate) {
              setDateField(id as DateFieldKeys, newStartDate.format());
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateInput;
