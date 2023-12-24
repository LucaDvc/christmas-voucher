import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import { Box, Container, Stack, Typography } from '@mui/material';
import image from '../assets/v2.png';

function Voucher() {
  const [voucher, setVoucher] = useState('');
  const [message, setMessage] = useState('');

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
  return (
    <Container
      component='main'
      maxWidth='xs'
      sx={{ position: 'relative', height: '100vh' }}
    >
      <Box
        sx={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%', // Full width
          maxWidth: '100%', // Ensure it doesn't exceed the width of the viewport
          height: '100vh', // Full height viewport
          display: 'flex',
          flexDirection: 'column', // Stack children vertically
          justifyContent: 'center', // Center children vertically
          alignItems: 'center', // Center children horizontally
          color: '#b7963a',
          padding: '0', // Remove padding if any
        }}
      >
        <Stack sx={{ display: 'flex', alignItems: 'center', mt: 8 }}>
          <Typography
            variant='h2'
            component='h1'
            style={{
              fontFamily: "'Playfair Display', serif",
            }}
            ml={1}
          >
            {voucher}
          </Typography>
          <Typography
            variant='h4'
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            RON
          </Typography>
          <Typography
            variant='h4'
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            left
          </Typography>
        </Stack>
      </Box>
    </Container>
  );
}

export default Voucher;
