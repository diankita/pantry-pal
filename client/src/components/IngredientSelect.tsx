'use client';
import {Autocomplete, TextField} from '@mui/material';
import {useEffect, useState} from 'react';
import useDebounce from '@/hooks/useDebounce';
import {fetchWithTimeout} from '@/services/api';
import {Ingredient} from '@/lib/types';

type IngredientSelectProps = {
  onChange: (event: React.ChangeEvent<{}>, value: any) => void;
  filterFunc: (
    options: Ingredient[],
    state: {inputValue: string}
  ) => Ingredient[];
};

export default function IngredientSelect({
  onChange,
  filterFunc,
}: IngredientSelectProps) {
  const [input, setInput] = useState('');
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  // Debounced function to fetch data
  const debouncedInput = useDebounce(input, 800, '');

  useEffect(() => {
    if (debouncedInput.length > 1) {
      fetchWithTimeout(
        `http://localhost:3001/ingredient/autocomplete?query=${debouncedInput}`
      ).then((data) => setIngredients(data));
    }
  }, [debouncedInput]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={ingredients}
      onChange={onChange}
      onInputChange={(event, newInputValue) => setInput(newInputValue)}
      getOptionLabel={(ingredient) => ingredient.name}
      getOptionKey={(ingredient) => ingredient.id}
      sx={{width: '100%'}}
      filterOptions={filterFunc}
      renderInput={(params) => (
        <TextField {...params} label="Select Ingredients" />
      )}
    />
  );
}
