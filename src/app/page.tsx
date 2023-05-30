import styles from './styles/home.module.scss';
import FormWrapper from './components/InvoiceForm/FormWrapper';
import InvoicePreview from './components/InvoicePreview';

export default function Home() {
  return (
    <main className={styles.main}>
      <FormWrapper />
      <InvoicePreview />
    </main>
  );
}
