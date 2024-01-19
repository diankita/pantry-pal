// TODO remove commented line
// src/lib/features/navigation/navigationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topNav: {
    visible: true,
    title: '',
    showBackButton: false,
  },
  bottomNav: {
    visible: true,
  },
};

const navigationSlice = createSlice({
  name: 'navigation',
  initialState,
  reducers: {
    setTopNavConfig: (state, action) => {
      state.topNav = { ...state.topNav, ...action.payload };
    },
    setBottomNavVisibility: (state, action) => {
      state.bottomNav.visible = action.payload;
    },
  },
});

export const { setTopNavConfig, setBottomNavVisibility } = navigationSlice.actions;

export default navigationSlice.reducer;
