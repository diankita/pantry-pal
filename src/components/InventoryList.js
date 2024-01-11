'use client';
import { useAppSelector } from '@/lib/hooks';

export default function InventoryList() {
  const inventory = useAppSelector((state) => state.inventory);

  
  const renderedInventory = inventory.map((item) => (
    <li key={item.id}>{item.name}</li>
  ));
  return (
    <>
      <ul>{renderedInventory}</ul>
    </>
  );
}
