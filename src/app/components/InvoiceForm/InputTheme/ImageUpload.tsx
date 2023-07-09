import React, { ChangeEvent } from 'react';
import useInputStore from '@/app/stores/inputStore';
import styles from '../styles/sidebar.module.scss';

const ImageUpload = () => {
  const setLogo = useInputStore((state) => state.setLogo);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setLogo({ url, file });
  };

  return (
    <div>
      <input
        type='file'
        accept='.jpg,.jpeg,.png,.svg'
        hidden
        onChange={handleFileChange}
        id='logo-upload'
      />
      <label htmlFor='logo-upload' className={styles.invoiceform__upload}>
        <div className={styles.upload__text}>
          <span>Upload Logo</span>
          <span className={styles.upload__helper}>
            JPG, JPEG, PNG, SVG less than 2MB
          </span>
        </div>
      </label>
    </div>
  );
};

export default ImageUpload;
