import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDrawerOpen: false,
};

export const toggleMenu = createSlice({
  name: 'toggleMenu',
  initialState,
  reducers: {
    toggleMobileMenu: (state) => {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});
