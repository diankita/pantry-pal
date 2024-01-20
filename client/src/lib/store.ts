import {configureStore} from '@reduxjs/toolkit';
import inventoryReducer from './features/inventory/inventorySlice';
import navigationReducer from './features/navigation/navigationSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      inventory: inventoryReducer,
      navigation: navigationReducer,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
