'use client';
import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
// import { debounce } from '@/utils/debounce';
import useDebounce from '@/hooks/useDebounce';
import { fetchWithTimeout } from '@/services/api';

export default function IngredientSelect({ onChange, filterFunc }) {
  // console.log(onSelect);
  // const [value, setValue] = useState(null);
  const [input, setInput] = useState('');
  const [options, setOptions] = useState([]);

  // Debounced function to fetch data
  const debouncedInput = useDebounce(input, 800, '');

  useEffect(() => {
    if (debouncedInput.length > 1) {
      fetchWithTimeout(
        `http://localhost:3001/ingredient/autocomplete?query=${debouncedInput}`
      ).then((data) => setOptions(data));
    }
  }, [debouncedInput]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={options}
      onChange={onChange}
      onInputChange={(event, newInputValue) => setInput(newInputValue)}
      getOptionLabel={(option) => option.name}
      sx={{ width: '100%' }}
      filterOptions={filterFunc}
      renderInput={(params) => (
        <TextField {...params} label="Select Ingredients" />
      )}
    />
  );
}
