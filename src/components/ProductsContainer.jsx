import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getProducts } from "../redux/slices/ProductsSlice";
import { add_cart, remove_cart } from "../redux/slices/cart_slice";

function ProductsContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const products = useSelector((state) => state.products.products_list);
  const { cart_list } = useSelector((state) => state.cart);
  //console.log(cart_list);

  // const handle_cart_add = (product) => {
  //   dispatch(add_cart(product));
  // };

  return (
    <div>
      <div className="products_grid">
        <div className="inner_products_grid">
          {products &&
            products.map((product) => {
              let { id, name, price, imageUrl } = product;
              let items_in_cart = cart_list.filter(
                (c_item) => c_item.id === id
              ).length;
              return (
                <div className="product_card" key={id}>
                  <span className="p_img">
                    <img src={imageUrl} alt="product image" />
                  </span>
                  <span className="p_title">{name}</span>
                  <span className="p_price"> ${price}</span>
                  {cart_list.find((c_item) => product.id === c_item.id) ? (
                    <span className="cart_btn extra_btns">
                      <span
                        className="plus_cart_icon"
                        onClick={() => dispatch(add_cart(product))}
                      >
                        {" "}
                        +{" "}
                      </span>
                      <span>{items_in_cart}</span>
                      <span
                        className="minus_cart_icon"
                        onClick={() => dispatch(remove_cart(id))}
                      >
                        {" "}
                        -
                      </span>
                    </span>
                  ) : (
                    <span
                      className="cart_btn"
                      onClick={() => dispatch(add_cart(product))}
                    >
                      <button>Add to cart</button>
                    </span>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductsContainer;
