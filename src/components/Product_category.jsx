import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Products_list from "./Products_List";

function Product_category() {
  const products = useSelector((state) => state.products.products_list);

  let { category } = useParams();

  const products_in_category = products.filter(
    (p_item) => p_item.category.toLowerCase() === category.toLowerCase()
  );
  console.log(products_in_category);

  return (
    <div>
      <Products_list products={products_in_category} />
    </div>
  );
}

export default Product_category;
