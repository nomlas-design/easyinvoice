import styles from '../styles/sidebar.module.scss';
import useInputStore from '@/app/stores/inputStore';
import { FieldKeys } from '@/app/stores/inputStore';

interface InputDetailProps {
  label: string;
  id: FieldKeys;
  type: string;
  placeholder: string;
}

const InputDetail = ({ label, id, type, placeholder }: InputDetailProps) => {
  const value = useInputStore((state) => state.getField(state, id));
  const setField = useInputStore((state) => state.setField);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setField(id, e.target.value);
  };

  return (
    <div className={styles.inputdetails__input}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={String(id)}
          placeholder={placeholder}
          rows={4}
          value={value}
          onChange={handleChange}
        />
      ) : (
        <input
          id={String(id)}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default InputDetail;
