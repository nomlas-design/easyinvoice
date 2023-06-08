import styles from '../styles/sidebar.module.scss';

interface InputDetailProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  onInputChange: (id: string, value: string) => void;
}

const InputDetail = ({
  label,
  id,
  type,
  placeholder,
  onInputChange,
}: InputDetailProps) => {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    onInputChange(id, e.target.value);
  };

  return (
    <div className={styles.inputdetails__input}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          rows={4}
          onChange={handleChange}
        />
      ) : (
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
        />
      )}
    </div>
  );
};

export default InputDetail;
