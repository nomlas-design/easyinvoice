import InputDetails from './InputDetails/InputDetails';
import InputAccordion from './InputAccordion';

const invoiceForm = () => {
  return (
    <>
      <InputAccordion
        name='Invoice Details'
        id='invoice_details'
        expanded={true}
      >
        <InputDetails id='invoice_details' expanded={true} />
      </InputAccordion>
      <InputAccordion name='Billing Items' id='invoice_items' expanded={false}>
        Hi
      </InputAccordion>
      <InputAccordion
        name='Logo and Colours'
        id='invoice_theme'
        expanded={false}
      >
        Hi
      </InputAccordion>
    </>
  );
};

export default invoiceForm;
