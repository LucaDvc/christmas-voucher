import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { getDatabase, ref, onValue, set } from 'firebase/database';

function Admin() {
  const [voucher, setVoucher] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // Initialize Firebase Database and fetch the voucher value
    const db = getDatabase();
    const voucherValueRef = ref(db, 'voucherValue');

    const unsubscribe = onValue(voucherValueRef, (snapshot) => {
      const value = snapshot.val();
      setVoucher(value);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    // Update the voucher value in Firebase Realtime Database
    const db = getDatabase();
    set(ref(db, 'voucherValue'), voucher)
      .then(() => {
        setMessage('Voucher value updated successfully!');
      })
      .catch((error) => {
        setMessage('Error updating voucher value: ' + error.message);
        setIsError(true);
      });
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AdminPanelSettingsIcon />
        </Avatar>
        <Box component='form' onSubmit={onSubmit} sx={{ mt: 1 }}>
          {/* Backend response errors */}
          {message && (
            <Alert severity={isError ? 'error' : 'success'}>{message}</Alert>
          )}
          <TextField
            margin='normal'
            required
            fullWidth
            value={voucher}
            label='Voucher Value'
            autoFocus
            onChange={(event) => setVoucher(event.target.value)}
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default Admin;
