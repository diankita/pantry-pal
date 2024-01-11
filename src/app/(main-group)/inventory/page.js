import IngredientSelect from '@/components/IngredientSelect';
import TopNav from '@/components/TopNav';
import InventoryList from '@/components/InventoryList';
import { AppBar, Autocomplete, TextField, Toolbar } from '@mui/material';
import InventoryEditor from '@/components/features/inventory/InventoryEditor';

export default function Page() {
  return (
    <div id="inventory-container">
      <TopNav title="Cook with Pantry"></TopNav>

      <InventoryEditor></InventoryEditor>

      {/* List of ingredients selected */}
    </div>
  );
}
