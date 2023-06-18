import { configureStore } from '@reduxjs/toolkit';
import StateSlice from '../features/State/StateSlice';

export const store = configureStore({
  reducer: {
    Popup: StateSlice.reducer,
    Name : StateSlice.reducer,
    Season: StateSlice.reducer,
    SeasonNumber : StateSlice.reducer,
  },
});
