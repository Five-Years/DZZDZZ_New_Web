import { configureStore } from '@reduxjs/toolkit';
import StateSlice from '../features/State/StateSlice';

export const store = configureStore({
  reducer: {
    Popup: StateSlice.reducer,
  },
});
