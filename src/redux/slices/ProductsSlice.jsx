import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useNavigate, Navigate} from "react-router-dom"
import axios from "axios";

const initialState = {
  products_list:''
  
};

export const getProducts = createAsyncThunk("products/getAll", async () => {
  const {data} =  await axios
    .get("https://ecomerce-56433-default-rtdb.firebaseio.com/store.json")
    .then((data) => data);

    const dataKeys = Object.keys(data);   
    const dataArray = dataKeys.map(key=>({id: key, ...data[key]}))
    
    return {data: dataArray}
});
export const postProducts = createAsyncThunk("products/post",   async (product, apiThunk) => {
  return await axios
    .post("https://ecomerce-56433-default-rtdb.firebaseio.com/store.json", product)
    .then((response) => response.data)
    .then(()=>apiThunk.dispatch(getProducts()))
    .catch((error) => console.log(error));
});
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      
    });
    builder.addCase(getProducts.fulfilled, (state, actions) => {
      state.products_list = actions.payload.data;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      alert(action.payload.error);
    });
    builder.addCase(postProducts.fulfilled, (state)=>{
      return state;
    })
  },
});

export default productsSlice.reducer;
