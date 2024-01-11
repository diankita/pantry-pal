import { configureStore } from '@reduxjs/toolkit'
import inventoryReducer from './features/inventory/inventorySlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      inventory: inventoryReducer
    }
  })
}