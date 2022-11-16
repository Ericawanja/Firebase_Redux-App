import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "./features/Products/ProductsSlice";

function ProductsContainer() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector((state) => state.products.products_list);
  

  return (
    <div>
      <div className="products_grid">
        <div className="inner_products_grid">
          {products &&
            products.map((product) => {
              console.log(product);
              let {id, name, description, category, price, discount, imageUrl} = product
              return (
                <div className="product_card" key={id}>
                  <span className="p_img">
                    <img
                      src={imageUrl}
                      alt="product image"
                    />
                  </span>
                  <span className="p_title">{name}</span>
                  <span className="p_price"> ${price}</span>
                  <span className="cart_btn">
                    <button>Add to cart</button>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductsContainer;
