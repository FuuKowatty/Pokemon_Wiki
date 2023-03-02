import { configureStore } from '@reduxjs/toolkit';
import { toggleSearchbar } from './slices/toggleMobileSearch';

export const store = configureStore({
  reducer: {
    toggleSearchbar: toggleSearchbar.reducer,
  },
});

export const { toggleMobileSearchbar } = toggleSearchbar.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
