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
import {
  inventoryAddList,
  inventoryRemoveOne,
} from '@/lib/features/inventory/inventorySlice';

export default function InventoryList() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetchWithTimeout(`http://localhost:3001/inventory?userId=1`).then((data) =>
      dispatch(inventoryAddList(data))
    );
  }, [dispatch]);

  const inventory = useAppSelector((state) => state.inventory);
  // console.log(inventory);
  const handleDelete = (inventoryId) => {
    fetchWithTimeout(`http://localhost:3001/inventory?userId=1`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredientId: inventoryId,
        userId: 1,
      }),
    }).then((data) => {
      console.log(data);
      dispatch(inventoryRemoveOne(inventoryId));
    });
  };

  const renderedInventory = inventory.map((inventory) => (
    <Card key={inventory.id} sx={{ display: 'flex', my: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: '20%', aspectRatio: '1', objectFit: 'contain' }}
        image={`https://spoonacular.com/cdn/ingredients_250x250/${inventory.image}`} // Assuming 'image' is the URL to the item's image
        alt={inventory.name}
      />
      <CardContent sx={{ flex: '1 1 auto', flexWrap: 'wrap' }}>
        <Typography
          component="div"
          variant="p"
          sx={{ textTransform: 'capitalize' }}>
          {inventory.name}
        </Typography>
      </CardContent>
      <IconButton
        onClick={() => handleDelete(inventory.id)}
        aria-label="delete"
        sx={{ alignSelf: 'center' }}>
        <DeleteIcon />
      </IconButton>
    </Card>
  ));

  return <div>{renderedInventory}</div>;
}
