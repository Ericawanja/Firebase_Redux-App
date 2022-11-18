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
      
      return  state;
    },
    remove_cart:(state, {payload})=>{
        let item_index = state.cart_list.findIndex((c_item)=> c_item.id === payload)
        console.log(item_index);
        state.cart_list.splice(item_index, 1)
        state.cart_value =  state.cart_value - 1
       
        return state;
    }
  },
});

export const {add_cart, remove_cart} = cartSlice.actions
export default cartSlice.reducer