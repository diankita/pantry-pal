import { createSlice } from '@reduxjs/toolkit';

const initialState = [
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
    inventoryRemoveOne(state, action) {
      return state.filter((inventory)=> inventory.id !== action.payload)
    },
  },
});

export const { inventoryAddOne, inventoryAddList, inventoryRemoveOne } = inventorySlice.actions;

export default inventorySlice.reducer;
