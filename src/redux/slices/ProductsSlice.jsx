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
console.log(data)
    const dataKeys = Object.keys(data);   
    const dataArray = dataKeys.map(key=>({id: key, ...data[key]}))
    
    return {data: dataArray}
});
export const postProducts = createAsyncThunk("products/post", async (product) => {
  return await axios
    .post("https://ecomerce-56433-default-rtdb.firebaseio.com/store.json", product)
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
});
export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state) => {
      console.log("pending");
    });
    builder.addCase(getProducts.fulfilled, (state, actions) => {
      state.products_list = actions.payload.data;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      alert(action.payload.error);
    });
  },
});

export default productsSlice.reducer;
