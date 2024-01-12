'use client';
import { useAppSelector } from '@/lib/hooks';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function InventoryList() {
  const inventory = useAppSelector((state) => state.inventory);

  const handleDelete = (itemId) => {
    // Implement the delete functionality
    console.log('Delete item with id:', itemId);
  };

  const renderedInventory = inventory.map((item) => (
    <Card key={item.id} sx={{ display: 'flex', my: 2 }}>
      {/* <CardMedia
        component="img"
        sx={{ width: '20%' }}
        image={item.image} // Assuming 'image' is the URL to the item's image
        alt={item.name}
      /> */}
      <CardContent sx={{ flex: '1 0 auto' }}>
        <Typography component="div" variant="p">
          {item.name}
        </Typography>
      </CardContent>
      <IconButton
        onClick={() => handleDelete(item.id)}
        aria-label="delete"
        sx={{ alignSelf: 'center' }}>
        <DeleteIcon />
      </IconButton>
    </Card>
  ));

  return <div>{renderedInventory}</div>;
}
