import IngredientSelect from '@/components/IngredientSelect';
import TopNav from '@/components/TopNav';
import { AppBar, Autocomplete, TextField, Toolbar } from '@mui/material';

export default function Page() {
  return (
    <div id="inventory-container">
      <TopNav title="Cook with Pantry"></TopNav>
      <IngredientSelect></IngredientSelect>
      {/* List of ingredients selected */}
    </div>
  );
}
