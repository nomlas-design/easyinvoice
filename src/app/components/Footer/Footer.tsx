import styles from './styles/footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__column}>Logo</div>
      <div className={styles.footer__column}>
        <button className={`btn ${styles['btn--download']}`}>
          Download PDF
        </button>
      </div>
    </footer>
  );
};

export default Footer;
