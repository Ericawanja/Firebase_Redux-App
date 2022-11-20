import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { getProducts } from "../redux/slices/ProductsSlice";
import { add_cart_product, reduce_cart } from "../redux/slices/cart_slice";

function Product_category() {
  const dispatch = useDispatch();

  
  const products = useSelector((state) => state.products.products_list);
  const { cart_list } = useSelector((state) => state.cart);


  let { category } = useParams();
  
  const products_in_category = products.filter((p_item)=>
    p_item.category.toLowerCase() === category.toLowerCase()
)
  console.log(products_in_category);

  return (
    <div>
      <div className="products_grid">
        <div className="inner_products_grid">
          { products_in_category&&
            products_in_category.map((product, index) => {
              let { id, name, price, imageUrl } = product;

              return (
                <div className="product_card" key={index}>
                  <span className="p_img">
                    <img src={imageUrl} alt="product image" />
                  </span>
                  <span className="p_title">{name}</span>
                  <span className="p_price"> ${price}</span>
                  {cart_list.find((c_item) => product.id === c_item.id) ? (
                    <span className="cart_btn extra_btns">
                      <span
                        className="plus_cart_icon"
                        onClick={() => dispatch(add_cart_product(product))}
                      >
                        {" "}
                        +{" "}
                      </span>
                      <span>
                        {
                          cart_list.find((c_item) => product.id === c_item.id)
                            .quantity
                        }
                      </span>
                      <span
                        className="minus_cart_icon"
                        onClick={() => dispatch(reduce_cart(id))}
                      >
                        {" "}
                        -
                      </span>
                    </span>
                  ) : (
                    <span
                      className="cart_btn"
                      onClick={() => dispatch(add_cart_product(product))}
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

export default Product_category;
