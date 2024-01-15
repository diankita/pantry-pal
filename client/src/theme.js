'use client';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#fe8700',
      contrastText: "#fff" //button text white instead of black
    },
  },
});


export default theme;
