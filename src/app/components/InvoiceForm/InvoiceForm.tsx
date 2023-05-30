'use client';

import styles from './styles/form.module.scss';
import { useState } from 'react';

import InvoiceItem from './InvoiceItem';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import CurrencyInput from 'react-currency-input-field';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

export default function InvoiceForm() {
  const [items, setItems] = useState([{ id: 1 }]);

  const handleAddItem = () => {
    setItems((prevItems) => [...prevItems, { id: prevItems.length + 1 }]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <Box className={styles.invoiceform} component='form' autoComplete='off'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <TextField
            id='invoice-number'
            label='Invoice Number'
            variant='outlined'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            id='purchase-order'
            label='Purchase Order'
            variant='outlined'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <button className={styles.invoiceform__upload}>
            <FileUploadIcon sx={{ fontSize: 30 }} />
            <div className={styles.upload__text}>
              <span>Upload Logo</span>
              <span className={styles.upload__helper}>JPG, PNG</span>
            </div>
          </button>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id='company-details'
            label='Company Details'
            multiline
            rows={4}
            variant='outlined'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            id='billing-details'
            label='Bill to'
            multiline
            rows={4}
            variant='outlined'
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={styles.invoiceform__items}>
            {items.map((item) => (
              <InvoiceItem
                key={item.id}
                id={item.id}
                onDelete={handleDeleteItem}
              />
            ))}
            <Grid
              item
              xs={12}
              container
              justifyContent='center'
              display='flex'
              width='100%'
              marginTop={3.5}
            >
              <Fab
                variant='extended'
                color='primary'
                aria-label='Add Item'
                onClick={handleAddItem}
                // justify content center
                sx={{ width: '150px' }}
              >
                <AddIcon sx={{ mr: 1 }} />
                <span className={styles.fab__text}>Add Item</span>
              </Fab>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
