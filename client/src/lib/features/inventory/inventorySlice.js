import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  // {
  //   id: 16058,
  //   label: 'canned chickpeas',
  //   name: 'canned chickpeas',
  //   image: 'chickpeas.png',
  //   aisle: 'Canned and Jarred',
  //   possibleUnits: ['can', 'g', 'oz', 'cup', 'serving'],
  //   children: [],
  // },
  // {
  //   id: 6016,
  //   label: 'condensed cream of chicken soup',
  //   name: 'condensed cream of chicken soup',
  //   image: 'cream-of-chicken-soup.jpg',
  //   aisle: 'Canned and Jarred',
  //   possibleUnits: ['can', 'g', 'oz', 'cup'],
  //   children: [],
  // },
];

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    inventoryAddOne(state, action) {
      state.push(action.payload);
    },
    inventoryAddList(state, action) {
      state.length = 0; // Clear the current state
      state.push(...action.payload); // Add new items from the payload
    },
  },
});

export const { inventoryAddOne, inventoryAddList } = inventorySlice.actions;

export default inventorySlice.reducer;
