'use client';

import { useState, useEffect } from 'react';
import InputDetail from '../InputDetails/InputDetail';
import styles from '../styles/sidebar.module.scss';
import Delete from './delete.svg';

function convertAmount(unitCost: number, quantity: number) {
  return unitCost * quantity;
}

interface InvoiceItemProps {
  id: string;
}

const InvoiceItems = ({ id }: InvoiceItemProps) => {
  return (
    <form
      id={id}
      aria-labelledby={id}
      className={`${styles.inputdetails} ${styles.accordion__body}`}
    >
      <div className={styles.inputdetails__spread}>
        <InputDetail
          label='Item Description'
          id='item_description'
          type='text'
          placeholder=''
        />
      </div>
      <div className={styles.inputdetails__itemgrid}>
        <InputDetail
          label='Rate/Hr'
          id='item_cost'
          type='number'
          placeholder='0.00'
        />
        <InputDetail
          label='Hours'
          id='item_qty'
          type='number'
          placeholder='0.00'
        />
        <InputDetail
          label='Unit Cost'
          id='item_amount'
          type='number'
          placeholder='0.00'
        />
        <button className={styles.inputdetails__delete}>
          <Delete />
        </button>
      </div>
    </form>
    // <Grid container spacing={2} sx={{ mb: 2 }}>
    //   <Grid item xs={12} md={4}>
    //     <TextField
    //       id={`item-description-${id}`}
    //       label='Item Description'
    //       variant='outlined'
    //       sx={{ width: '100%' }}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={2}>
    //     <TextField
    //       id={`unit-cost-${id}`}
    //       label={billingMethod === 'hourly' ? 'Rate/Hr' : 'Unit Cost'}
    //       type='number'
    //       sx={{ width: '100%' }}
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //       onChange={(e) => setUnitCost(Number(e.target.value))}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={2}>
    //     <TextField
    //       id={`quantity-${id}`}
    //       label={billingMethod === 'hourly' ? 'Hours' : 'Quantity'}
    //       type='number'
    //       sx={{ width: '100%' }}
    //       InputLabelProps={{
    //         shrink: true,
    //       }}
    //       onChange={(e) => setQuantity(Number(e.target.value))}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={3}>
    //     <TextField
    //       id={`amount-${id}`}
    //       label='Amount'
    //       sx={{ width: '100%' }}
    //       value={amount}
    //       InputProps={{
    //         readOnly: true,
    //       }}
    //     />
    //   </Grid>
    //   <Grid item xs={12} md={1}>
    //     <Tooltip title='Delete Item'>
    //       <Fab
    //         color='secondary'
    //         aria-label='Delete Item'
    //         onClick={handleDelete}
    //       >
    //         <DeleteIcon />
    //       </Fab>
    //     </Tooltip>
    //   </Grid>
    // </Grid>
  );
};

export default InvoiceItems;
