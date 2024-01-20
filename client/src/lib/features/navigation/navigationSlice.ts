import {createSlice} from '@reduxjs/toolkit';

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
      state.topNav = {...state.topNav, ...action.payload};
    },
  },
});

export const {setTopNavConfig} = navigationSlice.actions;

export default navigationSlice.reducer;
