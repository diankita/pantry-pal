'use client';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import { fetchWithTimeout } from '@/services/api';
import { useEffect } from 'react';
import { inventoryAddList } from '@/lib/features/inventory/inventorySlice';

export default function InventoryList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchWithTimeout(`http://localhost:3001/inventory?userId=1`).then((data) =>
      dispatch(inventoryAddList(data))
    );
  }, [dispatch]);

  const inventory = useAppSelector((state) => state.inventory);
  // console.log(inventory);
  const handleDelete = (itemId) => {
    // Implement the delete functionality
    console.log('Delete item with id:', itemId);
  };

  const renderedInventory = inventory.map((item) => (
    <Card key={item.id} sx={{ display: 'flex', my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: '20%' , aspectRatio: '1', objectFit:'contain'}}
        image={`https://spoonacular.com/cdn/ingredients_250x250/${item.image}`} // Assuming 'image' is the URL to the item's image
        alt={item.name}
      />
      <CardContent sx={{ flex: '1 1 auto', flexWrap:'wrap' }}>
        <Typography component="div" variant="p" sx={{textTransform:'capitalize'}}>
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
