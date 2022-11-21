import { createSlice, current, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart_list: [],
};

export const getCart = createAsyncThunk("cart/getCart", async () => {
  console.log("getting");
  const { data } = await axios
    .get("https://ecomerce-56433-default-rtdb.firebaseio.com/cart.json")
    .then((data) => data);
  let dataArray = [];
  for (let key in data) {
    dataArray.push({
      ...data[key],
      cartid: key,
    });
  }
  //console.log(dataArray);
  return { data: dataArray };
});

export const postCart = createAsyncThunk(
  "cart/post",
  async (product, apiThunk) => {
    return await axios
      .post(
        "https://ecomerce-56433-default-rtdb.firebaseio.com/cart.json",
        product
      )
      .then((response) => response.data)
      .then(() => apiThunk.dispatch(getCart()))
      .catch((error) => console.log(error));
  }
);
//update
export const updateCart = createAsyncThunk(
  "cart/update",
  async (product, apiThunk) => {
    let {
      cartid,
      id,
      name,
      category,
      price,
      discount,
      imageUrl,
      description,
      quantity,
    } = product;
    console.log(product);
    return await axios
      .put(
        `https://ecomerce-56433-default-rtdb.firebaseio.com/cart/${cartid}.json`,
        {
          id: id,
          cartid: cartid,
          name: name,
          category: category,
          description: description,
          price: price,
          discount: discount,
          quantity: quantity,
          imageUrl: imageUrl,
        }
      )
      .then((response) => console.log(response))
      .then(() => apiThunk.dispatch(getCart()))
      .catch((error) => console.log(error));
  }
);

export const deleteCart = createAsyncThunk(
  "cart/delete",
  async (product, apiThunk) => {
    let { cartid } = product;

    //console.log('deleteing', cartid, product.quantity);
    await axios
      .delete(
        `https://ecomerce-56433-default-rtdb.firebaseio.com/cart/${cartid}.json`
      )
      .then((response) => console.log(response.data))
      .then(() => apiThunk.dispatch(getCart()))
      .catch((error) => console.log(error));
  }
);

export const clearCart = createAsyncThunk(
  "cart/update",

  async (apiThunk) => {
    console.log("clear");

    return await axios
      .put(`https://ecomerce-56433-default-rtdb.firebaseio.com/cart.json`, {})
      .then(() => apiThunk.dispatch(getCart()))
      .then(() => {
        console.log('thunk');
        return apiThunk.dispatch(getCart());
      });

    // .then((response) => console.log(response))

    // .catch((error) => console.log(error));
  }
);

const cartSlice = createSlice({
  name: "cart_slice",
  initialState,
  reducers: {
    add_cart_product: (state, { payload }) => {
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
    remove_product: (state, { payload }) => {
      state.cart_list = state.cart_list.filter(
        (c_item) => c_item.id !== payload
      );
    },
    clear_cart: (state) => {
      state.cart_list = [];
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.pending, (state) => {});
    builder.addCase(getCart.fulfilled, (state, actions) => {
      //console.log(actions.payload.data);
      state.cart_list = actions.payload.data;
    });
    builder.addCase(getCart.rejected, (state, action) => {
      alert(action.payload.error);
    });
    builder.addCase(postCart.fulfilled, (state) => {
      return state;
    });
  },
});

export const { add_cart_product, reduce_cart, remove_product } =
  cartSlice.actions;
export default cartSlice.reducer;
