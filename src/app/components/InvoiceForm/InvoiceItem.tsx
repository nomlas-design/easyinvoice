'use client';

import { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

function convertAmount(unitCost: number, quantity: number) {
  return unitCost * quantity;
}

interface InvoiceItemProps {
  id: number;
  onDelete: (id: number) => void;
}

export default function InvoiceItem({ id, onDelete }: InvoiceItemProps) {
  const [amount, setAmount] = useState(0);
  const [unitCost, setUnitCost] = useState(0);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    setUnitCost(unitCost);
    setQuantity(quantity);
    setAmount(convertAmount(unitCost, quantity));
  }, [unitCost, quantity]);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Grid container spacing={2} sx={{ mb: 2 }}>
      <Grid item xs={12} md={4}>
        <TextField
          id={`item-description-${id}`}
          label='Item Description'
          variant='outlined'
          sx={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          id={`unit-cost-${id}`}
          label='Unit Cost'
          type='number'
          sx={{ width: '100%' }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setUnitCost(Number(e.target.value))}
        />
      </Grid>
      <Grid item xs={12} md={2}>
        <TextField
          id={`quantity-${id}`}
          label='Quantity'
          type='number'
          sx={{ width: '100%' }}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />
      </Grid>
      <Grid item xs={12} md={3}>
        <TextField
          id={`amount-${id}`}
          label='Amount'
          sx={{ width: '100%' }}
          value={amount}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={12} md={1}>
        <Tooltip title='Delete Item'>
          <Fab
            color='secondary'
            aria-label='Delete Item'
            onClick={handleDelete}
          >
            <DeleteIcon />
          </Fab>
        </Tooltip>
      </Grid>
    </Grid>
  );
}
