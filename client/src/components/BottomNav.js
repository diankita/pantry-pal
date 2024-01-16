'use client';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import { usePathname } from 'next/navigation';
import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
  Toolbar,
} from '@mui/material';
import Link from 'next/link';
import { useAppSelector } from '@/lib/hooks';

export default function BottomNav() {
  const pathname = usePathname();
  const bottomNavConfig = useAppSelector((state) => state.navigation.bottomNav);
  if (!bottomNavConfig.visible) {
    return null;
  }
  return (
    <>
      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}>
        <BottomNavigation value={pathname}>
          <BottomNavigationAction
            label="Home"
            icon={<HomeOutlinedIcon />}
            component={Link}
            value="/home"
            href="/home"
          />
          <BottomNavigationAction
            label="Inventory"
            icon={<Inventory2OutlinedIcon />}
            component={Link}
            value="/inventory"
            href="/inventory"
          />
          {/* <BottomNavigationAction
          label="New"
          icon={<AddOutlinedIcon />} component={Button}></BottomNavigationAction> */}
          <BottomNavigationAction
            label="Likes"
            icon={<FavoriteBorderOutlinedIcon />}
            component={Link}
            value="/likes"
            href="/likes"
          />
          <BottomNavigationAction
            label="Profile"
            icon={<PersonOutlineOutlinedIcon />}
            component={Link}
            value="/profile"
            href="/profile"
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
