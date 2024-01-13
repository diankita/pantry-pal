'use client';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
