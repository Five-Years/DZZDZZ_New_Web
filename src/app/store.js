import { configureStore } from '@reduxjs/toolkit';
import StateSlice from '../features/counter/StateSlice';

export const store = configureStore({
  reducer: {
    Popup: StateSlice.reducer,
  },
});
