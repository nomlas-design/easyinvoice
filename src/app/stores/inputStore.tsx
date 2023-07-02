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

export type DateFieldKeys = 'invoice_date' | 'due_date';

export interface InvoiceItem {
  id: string;
  description: string;
  rate: string | number;
  quantity: number | string;
  total: string | number;
}

const currencySymbols: { [key: string]: string } = {
  AUD: '$',
  USD: 'US$',
  NZD: 'NZ$',
  EUR: '€',
  GBP: '£',
  JPY: '¥',
};

interface InputStore {
  fields: Fields;
  dateFields: Record<DateFieldKeys, string>;
  invoiceItems: InvoiceItem[];
  colour: string;
  textBackgroundColour: string;
  textColour: string;
  getField: (state: InputStore, id: FieldKeys) => string;
  getDateField: (state: InputStore, id: DateFieldKeys) => string;
  setField: (id: FieldKeys, value: string) => void;
  setDateField: (id: DateFieldKeys, value: string) => void;
  addInvoiceItem: () => void;
  removeInvoiceItem: (id: string) => void;
  setInvoiceItemField: (
    id: string,
    field: keyof InvoiceItem,
    value: string | number
  ) => void;
  getLabels: (state: InputStore) => string[];
  getCurrencyPrefix: (state: InputStore) => string;
  setColour: (colour: string) => void;
  setBackgroundTextColour: (colour: string) => void;
  setTextColour: (colour: string) => void;
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
  // invoiceItems: [
  //   {
  //     id: uuidv4(),
  //     description: '',
  //     rate: '',
  //     quantity: '',
  //     total: '',
  //   },
  // ],
  invoiceItems: [
    {
      id: uuidv4(),
      description: 'Website Design',
      rate: 50,
      quantity: 20,
      total: 50 * 20,
    },
    {
      id: uuidv4(),
      description: 'Frontend Development',
      rate: 60,
      quantity: 30,
      total: 60 * 30,
    },
    {
      id: uuidv4(),
      description: 'Backend Development',
      rate: 70,
      quantity: 40,
      total: 70 * 40,
    },
  ],
  colour: '#000000',
  textBackgroundColour: '#ffffff',
  textColour: '#000000',
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
        { id: uuidv4(), description: '', rate: 0, quantity: 0, total: 0 },
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
        return { invoiceItems: newItems };
      }
      // return previous state if condition not met
      return state;
    }),
  getLabels: (state) =>
    state.fields['billing_method'] === 'hours'
      ? ['Rate/Hour', 'Hours']
      : ['Unit Cost', 'Units'],
  getCurrencyPrefix: (state) =>
    currencySymbols[state.fields['currency']] || '$',
  setColour: (colour) => set((state) => ({ ...state, colour: colour })),
  setBackgroundTextColour: (colour) =>
    set((state) => ({ ...state, textBackgroundColour: colour })),

  setTextColour: (colour) => set((state) => ({ ...state, textColour: colour })),
}));

export default useInputStore;
