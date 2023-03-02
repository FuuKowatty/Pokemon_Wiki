import { createSlice } from '@reduxjs/toolkit';
import { initialState as initialStateProps } from 'appProviders/AppProviders.types';

const initialState: initialStateProps = {
  isActive: false,
};

export const toggleSearchbar = createSlice({
  name: 'toggleSearchbar',
  initialState,
  reducers: {
    toggleMobileSearchbar: (state) => {
      state.isActive = !state.isActive;
    },
  },
});
