import RecipeList from '@/components/features/recipe/RecipeList';
import Box from '@mui/material/Box';

export default function Page() {
  return (
    <Box overflow="auto" height="calc(100% - 56px)">
      <RecipeList></RecipeList>
    </Box>
  );
}
