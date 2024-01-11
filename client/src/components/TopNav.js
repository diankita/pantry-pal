'use client';

import { usePathname } from 'next/navigation';
import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  IconButton,
  Paper,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import useScrollTrigger from "@mui/material/useScrollTrigger";

export default function TopNav({ title }) {
  const trigger = useScrollTrigger();
  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ position: 'absolute', top: 5, left: 16 }}>
              <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
            </IconButton>
            <Typography
              variant="p"
              component="p"
              sx={{ flexGrow: 1, textAlign: 'center' }}>
              {title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}
