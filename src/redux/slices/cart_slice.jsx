import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart_list:[],
    cart_value:0
};
const cartSlice = createSlice({
  name: "cart_slice",
  initialState,
  reducers: {
    add_cart: (state, { payload }) => {
       state.cart_value =  state.cart_value + 1
      state.cart_list.push(payload)
      //console.log(state.cart_value, state.cart_list.length);
      return  state;
    },
    remove_cart:(state, {payload})=>{
        console.log('removing')
    }
  },
});

export const {add_cart} = cartSlice.actions
export default cartSlice.reducer