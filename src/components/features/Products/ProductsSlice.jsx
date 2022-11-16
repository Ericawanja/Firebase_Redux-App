import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = { };

export const getProducts =  createAsyncThunk('products/getAll', async()=>{
     return await axios.get('https://ecomerce-56433-default-rtdb.firebaseio.com/store.json').then(data=>data)
     
})
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: builder=>{
    builder.addCase( getProducts.pending, state=>{
        console.log('pending');

    })
    builder.addCase(getProducts.fulfilled, (state,actions)=>{

       state.products_list = actions.payload.data
    })
    builder.addCase(getProducts.rejected, (state,action)=>{
        alert(action.payload.error)
    })
  }
});

export default productsSlice.reducer;
