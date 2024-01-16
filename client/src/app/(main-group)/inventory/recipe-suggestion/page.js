'use client';
import RecipeList from '@/components/features/recipe/RecipeList';
import Box from '@mui/material/Box';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { useEffect } from 'react';
import {
  setBottomNavVisibility,
  setTopNavConfig,
} from '@/lib/features/navigation/navigationSlice';

export default function Page() {
  const dispatch = useAppDispatch();
  // const topNavConfig = useAppSelector(state => state.navigation.topNav);

  useEffect(() => {
    dispatch(
      setTopNavConfig({
        visible: true,
        title: 'Recipe Suggestions',
        showBackButton: true,
      })
    );
    // dispatch(setBottomNavVisibility(false));
  }, [dispatch]);
  return (
    <Box overflow="auto" height="calc(100% - 3.5rem)">
      <RecipeList></RecipeList>
    </Box>
  );
}
