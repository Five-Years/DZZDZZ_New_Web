import { createAsyncThunk, createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = {
  value: false
};

 const StateSlice = createSlice({
  name: 'popup',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Popup: (state) => {
      state.value = !state.value
    },
  },
 
});

export default StateSlice;