import dayjs, { Dayjs } from 'dayjs';
import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';

export type FieldKeys =
  | 'company_name'
  | 'email'
  | 'invoice_number'
  | 'purchase_order'
  | 'company_details'
  | 'bill_to'
  | 'currency'
  | 'billing_method';

type Fields = Record<FieldKeys, string>;

type DateFields = 'invoice_date' | 'due_date';

export interface InvoiceItem {
  id: string;
  description: string;
  rate: string | number;
  quantity: number;
  total: string | number;
}

interface InputStore {
  fields: Fields;
  dateFields: Record<DateFields, string>;
  invoiceItems: InvoiceItem[];
  getField: (state: InputStore, id: FieldKeys) => string;
  getDateField: (state: InputStore, id: DateFields) => string;
  setField: (id: FieldKeys, value: string) => void;
  setDateField: (id: DateFields, value: string) => void;
  addInvoiceItem: () => void;
  removeInvoiceItem: (id: string) => void;
  setInvoiceItemField: (
    id: string,
    field: keyof InvoiceItem,
    value: string | number
  ) => void;
}

const useInputStore = create<InputStore>((set) => ({
  fields: {
    company_name: '',
    email: '',
    invoice_number: '',
    purchase_order: '',
    company_details: '',
    bill_to: '',
    currency: 'AUD',
    billing_method: 'hours',
  },
  dateFields: {
    invoice_date: dayjs().format(),
    due_date: dayjs().add(1, 'week').format(),
  },
  invoiceItems: [],
  getField: (state, id) => state.fields[id],
  getDateField: (state, id) => state.dateFields[id],
  setField: (id, value) =>
    set((state) => ({
      fields: { ...state.fields, [id]: value },
    })),
  setDateField: (id, value) =>
    set((state) => ({
      dateFields: { ...state.dateFields, [id]: value },
    })),
  addInvoiceItem: () =>
    set((state) => ({
      invoiceItems: [
        ...state.invoiceItems,
        { id: uuidv4(), description: '', rate: '', quantity: 0, total: '' },
      ],
    })),
  removeInvoiceItem: (idToRemove: string) =>
    set((state) => ({
      invoiceItems: state.invoiceItems.filter((item) => item.id !== idToRemove),
    })),
  setInvoiceItemField: (
    id: string,
    field: keyof InvoiceItem,
    value: string | number
  ) =>
    set((state) => {
      const itemIndex = state.invoiceItems.findIndex((item) => item.id === id);
      if (itemIndex >= 0) {
        const newItems = [...state.invoiceItems];
        newItems[itemIndex] = { ...newItems[itemIndex], [field]: value };
        console.log('newItems after change', newItems); // Add this line
        return { invoiceItems: newItems };
      }
    }),
}));

export default useInputStore;
