// userSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  products: [],
  status: 'idle',
  error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data)
    return response.data; // send users id,mail,name to fetchUsers
  } catch (error) {
    throw error;
  }
});





const ProductSlice = createSlice({
  
  name: 'products',
  initialState,
  reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.pending, (state) => {
            state.status = 'loading';
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.products = action.payload;
            console.log(action.payload)
          })
          .addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
          })
          
      
    
  },
   
  

 


});


 
export default ProductSlice.reducer;
export const {extraReducers}= ProductSlice.actions ;