// userSlice.js
import { createSlice } from '@reduxjs/toolkit';




const loginSlice = createSlice({
  name: 'login',
  initialState:{userLogin:[]},
  reducers: {
    addLogin: (state, action) => {
      state.userLogin=(action.payload);
      console.log(action.payload,'action')  
    },
  },
});



export const { addLogin } = loginSlice.actions;

export default loginSlice.reducer;
