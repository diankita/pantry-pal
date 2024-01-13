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

  // When user choose one of the autocomplete options from the dropdown, send a second request to the other api to get full details of the ingredient

  // TODO save it to user database, and then add to rtk state
  // TODO when app launch call api to get list of save inventories
  async function onIngredientSelect(event, selectedIngredient) {
    console.log(selectedIngredient);

    // Get full ingredient details from name (external api)
    // const ingredientDetails = await fetchWithTimeout(
    //   `http://localhost:3001/ingredient/search?query=${selectedIngredient.name}`
    // ).then((data) => data.results[0]);

    // Save to own db
    fetchWithTimeout(`http://localhost:3001/inventory`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ingredientName: selectedIngredient.name,
        userId: 1,
      }),
    }).then((data) => dispatch(inventoryAddOne(data)));

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
