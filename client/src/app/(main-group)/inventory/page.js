import InventoryEditor from '@/components/features/inventory/InventoryEditor';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Page() {
  return (
    <Box height="100%" paddingX={1} paddingTop={2}>
      <Box overflow="auto" height="calc(100% - 100px)">
        <InventoryEditor></InventoryEditor>
      </Box>
      <Button
        variant="contained"
        href="/inventory/recipe-suggestion"
        fullWidth={true}
        endIcon={<ArrowForwardIcon />}>
        View Recipes
      </Button>
    </Box>
  );
}
