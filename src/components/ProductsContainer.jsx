import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../redux/slices/ProductsSlice";
import { add_cart_product, reduce_cart } from "../redux/slices/cart_slice";
import Products_list from "./Products_List";

function ProductsContainer() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getProducts());
  // }, []);
  const products = useSelector((state) => state.products.products_list);
  const { cart_list } = useSelector((state) => state.cart);

  console.log(products);


  return (
    <div>
       <Products_list products={products} />
    </div>
  );
}

export default ProductsContainer;
