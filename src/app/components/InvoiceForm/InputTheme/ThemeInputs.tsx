//   <Box
//     className={`${styles.invoiceform__grid__item} ${styles.item_details}`}
//   >
//     <Box className={styles.invoiceform__items}>
//       <Box className={styles.invoiceform__items__text}>
//         <h3>Item Details</h3>
//         <span>Choose whether to be billed by units or hourly.</span>
//       </Box>
//       <InputLabel id='billing-method-label'>Billing Method</InputLabel>
//       <Select
//         labelId='billing-method-label'
//         id='demo-simple-select'
//         value={billingMethod}
//         defaultValue='Hourly'
//         onChange={handleBillingMethodChange}
//         sx={{ minWidth: '100%', mb: 4 }}
//       >
//         <MenuItem value={'hourly'}>Hourly</MenuItem>
//         <MenuItem value={'units'}>Units</MenuItem>
//       </Select>
//       {items.map((item) => (
//         <InvoiceItem
//           key={item.id}
//           id={item.id}
//           onDelete={handleDeleteItem}
//           billingMethod={billingMethod}
//         />
//       ))}
//       <Box className={styles.invoiceform__additem}>
//         <Fab
//           variant='extended'
//           color='primary'
//           aria-label='Add Item'
//           onClick={handleAddItem}
//           sx={{ width: '150px' }}
//         >
//           <AddIcon sx={{ mr: 1 }} />
//           <span className={styles.fab__text}>Add Item</span>
//         </Fab>
//       </Box>
//     </Box>
//   </Box>
// </Box>
