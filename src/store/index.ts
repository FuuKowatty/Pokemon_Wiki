import { configureStore } from '@reduxjs/toolkit';
import { toggleMenu } from './slices/toggleMobileMenu';
import { toggleSearchbar } from './slices/toggleMobileSearch';

export const store = configureStore({
  reducer: {
    toggleSearchbar: toggleSearchbar.reducer,
    toggleMenu: toggleMenu.reducer,
  },
});

export const { toggleMobileSearchbar } = toggleSearchbar.actions;
export const { toggleMobileMenu } = toggleMenu.actions;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
