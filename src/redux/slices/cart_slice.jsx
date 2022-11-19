import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cart_list: [],

};
const cartSlice = createSlice({
  name: "cart_slice",
  initialState,
  reducers: {
    add_cart_product: (state, { payload }) => {
     
      // console.log(current(state));
      //check iof item exist in cart
      let item_index = state.cart_list.findIndex(
        (c_item) => c_item.id === payload.id
      );

      if (item_index !== -1) {
        //increase quantity if exists
        state.cart_list[item_index].quantity =
          state.cart_list[item_index].quantity + 1;
      } else {
        //add quantity property otherwise
        let new_item = { ...payload, quantity: 1 };

        state.cart_list.push(new_item);
      }

      return state;
    },
    reduce_cart: (state, { payload }) => {
     
      //reduce quantity
      state.cart_list = state.cart_list.map((c_item) => {
        if (c_item.id === payload) {
          c_item.quantity = c_item.quantity - 1;
        }
        return c_item;
      });
      //filter item with quantinty less than 1
      state.cart_list = state.cart_list.filter((c_item) => c_item.quantity > 0);
      //console.log(state.cart_list);
    },
    remove_product:(state, {payload})=>{
   
      state.cart_list= state.cart_list.filter(c_item=>c_item.id !== payload)
    

    },
    clear_cart:(state)=>{
    
      state.cart_list = []
      return state

    }
  },
});

export const { add_cart_product, reduce_cart, remove_product, clear_cart } = cartSlice.actions;
export default cartSlice.reducer;
