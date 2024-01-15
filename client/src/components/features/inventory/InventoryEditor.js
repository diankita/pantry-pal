'use client';
import IngredientSelect from '@/components/IngredientSelect';
import InventoryList from '@/components/InventoryList';
import { inventoryAddOne } from '@/lib/features/inventory/inventorySlice';
import { useAppDispatch } from '@/lib/hooks';
import { fetchWithTimeout } from '@/services/api';
import { useState } from 'react';

export default function InventoryEditor() {
  const [autocompleteKey, setAutocompleteKey] = useState(0);
  const dispatch = useAppDispatch();

  // TODO save it to user database, and then add to rtk state
  // TODO when app launch call api to get list of save inventories
  async function onIngredientSelect(event, selectedIngredient) {
    console.log(selectedIngredient);

    // Save to own db
    fetchWithTimeout(`http://localhost:3001/inventory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredientId: selectedIngredient.id,
        userId: 1,
      }),
    }).then((data) => {
      if (data) {
        dispatch(inventoryAddOne(selectedIngredient));
      }
    });

    setAutocompleteKey((prev) => prev + 1);
  }
  return (
    <>
      <IngredientSelect
        onChange={onIngredientSelect}
        key={autocompleteKey}></IngredientSelect>
      <InventoryList></InventoryList>
    </>
  );
}
