import InventoryEditor from '@/components/features/inventory/InventoryEditor';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function Page() {
  return (
    <Box height="100%" paddingX={1} paddingTop={2}>
      <Box overflow="auto" height="calc(100% - 100px)">
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
