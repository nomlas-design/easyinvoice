import styles from '../styles/sidebar.module.scss';

interface InputDetailProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
}

const InputDetail = ({ label, id, type, placeholder }: InputDetailProps) => {
  return (
    <div className={styles.inputdetails__input}>
      <label htmlFor={id}>{label}</label>
      {type === 'textarea' ? (
        <textarea id={id} placeholder={placeholder} rows={4} />
      ) : (
        <input id={id} type={type} placeholder={placeholder} />
      )}
    </div>
  );
};

export default InputDetail;
