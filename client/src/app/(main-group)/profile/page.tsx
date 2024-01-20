'use client';
import { useEffect } from 'react';
import { useAppDispatch } from '@/lib/hooks';
import { setTopNavConfig } from '@/lib/features/navigation/navigationSlice';
import Typography from '@mui/material/Typography';

export default function Page() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setTopNavConfig({
        visible: true,
        title: 'Profile',
        showBackButton: false,
      })
    );
  }, [dispatch]);

  return (
    <Typography component="h1" textAlign={'center'} marginTop={3}>
      {' '}
      Coming soon....
    </Typography>
  );
}
