'use client';
import BottomNav from '@/components/BottomNav';
import TopNav from '@/components/TopNav';
import Box from '@mui/material/Box';
import {useTheme} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Children} from '@/lib/types';
import React from 'react';

export default function MainLayout({children}: Children) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box height="100%" paddingBottom={7}>
      <TopNav></TopNav>
      <Box
        width={isMobile ? '100%' : '70vw'}
        maxWidth={isMobile ? '100%' : '550px'}
        marginX={'auto'}
        height={'100%'}
      >
        {children}
      </Box>
      <BottomNav></BottomNav>
    </Box>
    // TODO use redux to control state for showing bottom nav
    // TODO use redux to control state for top nav title
  );
}
