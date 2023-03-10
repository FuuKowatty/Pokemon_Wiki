import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSearchbarActive: false,
};

export const toggleSearchbar = createSlice({
  name: 'toggleSearchbar',
  initialState,
  reducers: {
    toggleMobileSearchbar: (state) => {
      state.isSearchbarActive = !state.isSearchbarActive;
    },
  },
});
