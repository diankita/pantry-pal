'use client';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Slide from '@mui/material/Slide';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import {useAppSelector} from '@/lib/hooks';
import {useRouter} from 'next/navigation';

export default function TopNav() {
  const trigger = useScrollTrigger();
  const topNavConfig = useAppSelector((state) => state.navigation.topNav);
  const router = useRouter();
  if (!topNavConfig.visible) {
    return null;
  }

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar>
          <Toolbar>
            {topNavConfig.showBackButton && (
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={() => router.back()}
                sx={{position: 'absolute', top: 5, left: 16}}
              >
                <ArrowBackIosNewIcon fontSize="small"></ArrowBackIosNewIcon>
              </IconButton>
            )}
            <Typography
              variant="h6"
              component="p"
              sx={{flexGrow: 1, textAlign: 'center'}}
            >
              {topNavConfig.title}
            </Typography>
          </Toolbar>
        </AppBar>
      </Slide>
      <Toolbar />
    </>
  );
}
