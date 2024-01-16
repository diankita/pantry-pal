'use client';
import InventoryEditor from '@/components/features/inventory/InventoryEditor';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';
import { setTopNavConfig } from '@/lib/features/navigation/navigationSlice';

export default function Page() {
  const dispatch = useAppDispatch();
  // const topNavConfig = useAppSelector(state => state.navigation.topNav);

  useEffect(() => {
    dispatch(
      setTopNavConfig({ visible: true, title: 'Cook with Inventory', showBackButton: false })
    );
  }, [dispatch]);

  return (
    <Box height="100%" paddingX={1} paddingTop={2}>
      <Box overflow="auto" height="calc(100% - 7rem)">
        <InventoryEditor></InventoryEditor>
      </Box>
      <Link
        href={{
          pathname: '/inventory/recipe-suggestion',
        }}>
        <Button
          variant="contained"
          fullWidth={true}
          endIcon={<ArrowForwardIcon />}>
          View Recipes
        </Button>
      </Link>
    </Box>
  );
}
