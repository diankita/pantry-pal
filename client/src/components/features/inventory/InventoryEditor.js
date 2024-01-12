'use client';
import IngredientSelect from '@/components/IngredientSelect';
import InventoryList from '@/components/InventoryList';
import { inventoryAdded } from '@/lib/features/inventory/inventorySlice';
import { useAppDispatch } from '@/lib/hooks';
import { useState } from 'react';

export default function InventoryEditor() {
  const [autocompleteKey, setAutocompleteKey] = useState(0);
  const dispatch = useAppDispatch();

  function onIngredientSelect(event, ingredient) {
    console.log(ingredient);
    dispatch(inventoryAdded(ingredient));
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