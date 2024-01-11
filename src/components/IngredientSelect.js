'use client';
import { Autocomplete, TextField } from '@mui/material';
import { useState } from 'react';

const ingredients = [
  {
    id: 11711111,
    name: 'chicken bones',
    image: 'chicken-bones.jpg',
    aisle: 'Meat',
    possibleUnits: ['g', 'oz'],
    children: [],
  },
  {
    id: 98878,
    name: 'buffalo sauce',
    image: 'hot-sauce-or-tabasco.png',
    aisle: 'Condiments',
    possibleUnits: ['g', 'oz', 'cup', 'tablespoon'],
    children: [],
  },
  {
    id: 6480,
    name: 'chicken bouillon',
    image: 'stock-cube.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['g', 'oz', 'fluid ounce', 'cup'],
    children: [],
  },
  {
    id: 6984,
    name: 'fat free chicken broth',
    image: 'chicken-broth.png',
    aisle: 'Canned and Jarred',
    possibleUnits: ['g', 'oz'],
    children: [],
  },
  {
    id: 6194,
    name: 'chicken broth',
    image: 'chicken-broth.png',
    aisle: 'Canned and Jarred',
    possibleUnits: [
      'quart',
      'can',
      'g',
      'tin',
      'oz',
      'teaspoon',
      'cup',
      'tablespoon',
    ],
    children: [
      {
        id: 6984,
        name: 'fat free chicken broth',
      },
      {
        id: 6970,
        name: 'low sodium chicken broth',
      },
    ],
  },
  {
    id: 6970,
    name: 'low sodium chicken broth',
    image: 'chicken-broth.png',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup', 'tablespoon'],
    children: [],
  },
  {
    id: 1006970,
    name: 'low sodium chicken stock',
    image: 'broth.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup', 'tablespoon'],
    children: [],
  },
  {
    id: 11213,
    name: 'escarole',
    image: 'escarole.jpg',
    aisle: 'Produce',
    possibleUnits: ['head', 'piece', 'g', 'bunch', 'oz', 'cup'],
    children: [],
  },
  {
    id: 6172,
    name: 'chicken stock',
    image: 'chicken-broth.png',
    aisle: 'Canned and Jarred',
    possibleUnits: [
      'can',
      'g',
      'tin',
      'oz',
      'teaspoon',
      'cup',
      'serving',
      'tablespoon',
    ],
    children: [],
  },
  {
    id: 6219,
    name: 'reduced fat cream of chicken soup',
    image: 'cream-of-chicken-soup.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup'],
    children: [],
  },
  {
    id: 6955,
    name: 'reduced sodium cream of chicken soup',
    image: 'cream-of-chicken-soup.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup'],
    children: [],
  },
  {
    id: 6195,
    name: 'reduced fat and reduced sodium cream of chicken soup',
    image: 'cream-of-chicken-soup.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup'],
    children: [],
  },
  {
    id: 5071,
    name: 'skinless chicken drumsticks',
    image: 'chicken-drumsticks.jpg',
    aisle: 'Meat',
    possibleUnits: ['piece', 'g', 'oz', 'cup', 'serving'],
    children: [],
  },
  {
    id: 6999,
    name: 'chicken gravy',
    image: 'gravy.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['g', 'oz', 'cup'],
    children: [],
  },
  {
    id: 5080,
    name: 'skinless chicken leg',
    image: 'chicken-drumsticks.jpg',
    aisle: 'Meat',
    possibleUnits: ['piece', 'g', 'oz', 'cup', 'leg', 'serving'],
    children: [],
  },
  {
    id: 99247,
    name: 'canned chicken breast',
    image: 'canned-food.png',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'piece', 'g', 'oz'],
    children: [],
  },
  {
    id: 1005096,
    name: 'bone in skinless chicken thighs',
    image: 'chicken-thighs.png',
    aisle: 'Meat',
    possibleUnits: [
      'package',
      'piece',
      'g',
      'oz',
      'serving',
      'thigh with skin',
    ],
    children: [],
  },
  {
    id: 16058,
    name: 'canned chickpeas',
    image: 'chickpeas.png',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup', 'serving'],
    children: [],
  },
  {
    id: 6016,
    name: 'condensed cream of chicken soup',
    image: 'cream-of-chicken-soup.jpg',
    aisle: 'Canned and Jarred',
    possibleUnits: ['can', 'g', 'oz', 'cup'],
    children: [],
  },
  {
    id: 1005062,
    name: 'bone in chicken breast',
    image: 'chicken-breasts.png',
    aisle: 'Meat',
    possibleUnits: ['piece', 'g', 'oz', 'cup', 'serving'],
    children: [
      {
        id: 1035062,
        name: 'bone in chicken breast halves',
      },
      {
        id: 1015057,
        name: 'bone in skin on chicken breast halves',
      },
    ],
  },
];
export default function IngredientSelect({ onChange, filterFunc}) {
  // console.log(onSelect);
  const [value, setValue] = useState(null);
  return (
    <Autocomplete
      value={value}
      disablePortal
      id="combo-box-demo"
      options={ingredients}
      onChange={onChange}
      // onInputChange={(event, newInputValue, reason) => {
      //   if (reason === 'reset') {
      //     setValue(null);
      //     return;
      //   } else {
      //     setValue(newInputValue);
      //   }
      // }}
      getOptionLabel={(option) => option.name}
      sx={{ width: '100%' }}
      filterOptions={filterFunc}
      renderInput={(params) => (
        <TextField {...params} label="Select Ingredients" />
      )}
    />
  );
}
