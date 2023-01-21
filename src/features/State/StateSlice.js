import { createAsyncThunk, createSlice,configureStore } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  query : 1
};

 const StateSlice = createSlice({
  name: 'popup',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    Popup: (state) => {
      state.value = !state.value
    },
    Number : (state,action) => {
      state.query = action.payload
    }
  },
 
});

export default StateSlice;