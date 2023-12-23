import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { CartItem } from '../types/cart-item.dto';

const CartProduct: React.FC<CartItem & { onRemove: () => void }> = ({ name, price, quantity, onRemove }) => (
  <Box>
    <Typography variant="h6">{name}</Typography>
    <Typography variant="body1">Price: {price}</Typography>
    <Typography variant="body1">Quantity: {quantity}</Typography>
    <Button variant="contained" color="secondary" onClick={onRemove}>
      Remove
    </Button>
  </Box>
);

export default CartProduct;
