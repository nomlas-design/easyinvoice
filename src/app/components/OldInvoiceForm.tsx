// import styles from './styles/form.module.scss';
// import { useState } from 'react';

// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import FileUploadIcon from '@mui/icons-material/FileUpload';
// import Fab from '@mui/material/Fab';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import Select, { SelectChangeEvent } from '@mui/material/Select';
// import AddIcon from '@mui/icons-material/Add';
// import { stripUnit } from 'polished';

// interface InvoiceFormProps {
//   onUserInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
//   onColourChange: (color: string) => void;
// }

// export default function InvoiceForm({
//   onUserInput,
//   onColourChange,
// }: InvoiceFormProps) {
//   const [items, setItems] = useState([{ id: 1 }]);
//   const [billingMethod, setBillingMethod] = useState('hourly');
//   const [colour, setColour] = useState('#aabbcc');

//   const handleAddItem = () => {
//     setItems((prevItems) => [...prevItems, { id: prevItems.length + 1 }]);
//   };

//   const handleDeleteItem = (id: number) => {
//     setItems((prevItems) => prevItems.filter((item) => item.id !== id));
//   };

//   const handleBillingMethodChange = (e: SelectChangeEvent) => {
//     setBillingMethod(e.target.value as string);
//   };

//   return (
//     <Box className={styles.invoiceform} component='form' autoComplete='off'>
//       <div className={styles.invoiceform__component}>
//         <div className={styles.invoiceform__header}>
//           <h3 className={styles.invoiceform__header__title}>Details</h3>
//           <span>+</span>
//         </div>
//         <Box className={styles.invoiceform__grid}>
//           <Box className={styles.invoiceform__grid__item}>
//             <TextField
//               id='invoice-number'
//               name='invoice_number'
//               label='Invoice Number'
//               variant='outlined'
//               sx={{ width: '100%' }}
//               onChange={onUserInput}
//             />
//           </Box>
//           <Box className={styles.invoiceform__grid__item}>
//             <TextField
//               id='purchase-order'
//               name='purchase_order'
//               label='Purchase Order'
//               variant='outlined'
//               sx={{ width: '100%' }}
//               onChange={onUserInput}
//             />
//           </Box>
//           <Box className={styles.invoiceform__grid__item}>
//             <button className={styles.invoiceform__upload}>
//               <FileUploadIcon sx={{ fontSize: 30 }} />
//               <div className={styles.upload__text}>
//                 <span>Upload Logo</span>
//                 <span className={styles.upload__helper}>
//                   JPG, JPEG, PNG, less than 2MB
//                 </span>
//               </div>
//             </button>
//           </Box>
//           <Box
//             className={`${styles.invoiceform__grid__item} ${styles.colourpicker_wrapper}`}
//           >
//             <ColourPicker
//               colour={colour}
//               onChange={(color) => {
//                 setColour(color);
//                 onColourChange(color);
//               }}
//             />
//           </Box>
//           <Box className={styles.invoiceform__grid__item}>
//             <TextField
//               id='company-name'
//               name='company_name'
//               label='Company Name'
//               variant='outlined'
//               sx={{ width: '100%' }}
//               onChange={onUserInput}
//             />
//           </Box>
//           <Box className={styles.invoiceform__grid__item}>
//             <TextField
//               id='email'
//               name='email'
//               label='Email Address'
//               variant='outlined'
//               sx={{ width: '100%' }}
//               onChange={onUserInput}
//             />
//           </Box>
//           <Box className={styles.invoiceform__grid__item}>
//             <TextField
//               id='company-details'
//               name='company_details'
//               label='Company Details'
//               multiline
//               rows={4}
//               variant='outlined'
//               sx={{ width: '100%' }}
//             />
//           </Box>
//           <Box className={styles.invoiceform__grid__item}>
//             <TextField
//               id='billing-details'
//               label='Bill to'
//               multiline
//               rows={4}
//               variant='outlined'
//               sx={{ width: '100%' }}
//             />
//           </Box>
//           <Box
//             className={`${styles.invoiceform__grid__item} ${styles.item_details}`}
//           >
//             <Box className={styles.invoiceform__items}>
//               <Box className={styles.invoiceform__items__text}>
//                 <h3>Item Details</h3>
//                 <span>Choose whether to be billed by units or hourly.</span>
//               </Box>
//               <InputLabel id='billing-method-label'>Billing Method</InputLabel>
//               <Select
//                 labelId='billing-method-label'
//                 id='demo-simple-select'
//                 value={billingMethod}
//                 defaultValue='Hourly'
//                 onChange={handleBillingMethodChange}
//                 sx={{ minWidth: '100%', mb: 4 }}
//               >
//                 <MenuItem value={'hourly'}>Hourly</MenuItem>
//                 <MenuItem value={'units'}>Units</MenuItem>
//               </Select>
//               {items.map((item) => (
//                 <InvoiceItem
//                   key={item.id}
//                   id={item.id}
//                   onDelete={handleDeleteItem}
//                   billingMethod={billingMethod}
//                 />
//               ))}
//               <Box className={styles.invoiceform__additem}>
//                 <Fab
//                   variant='extended'
//                   color='primary'
//                   aria-label='Add Item'
//                   onClick={handleAddItem}
//                   sx={{ width: '150px' }}
//                 >
//                   <AddIcon sx={{ mr: 1 }} />
//                   <span className={styles.fab__text}>Add Item</span>
//                 </Fab>
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </div>
//     </Box>
//   );
// }
