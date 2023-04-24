import {  createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
  query : 1,
  ticket : 0,
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
    },
    Ticket : (state,action) => {
      state.ticket = state.ticket + 1
    }
  },
 
});

export default StateSlice;