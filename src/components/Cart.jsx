import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  add_cart_product,
  remove_product,
  clear_cart,
  reduce_cart,
} from "../redux/slices/cart_slice";

function Cart() {
  const dispatch = useDispatch();
  const { cart_list, cart_value } = useSelector((state) => state.cart);
  const total_cost = cart_list.reduce((x, y) => {
    return x + y.quantity * y.price;
  }, 0);

  return (
    <div className="cartWrapper">
      <div className="inner_cart_wrapper">
        <h2>Cart items</h2>
        {cart_list.length > 0 ? (
          <div className="cart_wrapper">
            {cart_list.map((item) => {
              let {
                id,
                name,
                description,
                price,
                discount,
                imageUrl,
                quantity,
              } = item;
              return (
                <div className="cart_card">
                  <div className="cart_left">
                    <div className="cart_img">
                      <img src={imageUrl} alt="product image" />
                    </div>
                    <div className="cart_product_details">
                      <span className="cart_p_title">{name}</span>
                      <span className="cart_p_price">Price:{price}</span>
                      <span className="cart_p_desc">{description}</span>
                    </div>
                  </div>
                  <div className="cart_right">
                    <div className="first_div">
                      <span className="product_cost">
                        Cost: {quantity * price}
                      </span>
                      <span
                        className="remove_btn"
                        onClick={() => dispatch(remove_product(id))}
                      >
                        Remove
                      </span>
                    </div>
                    <div className="cart_btn extra_btns">
                      <span
                        className="plus_cart_icon"
                        onClick={() => dispatch(add_cart_product(item))}
                      >
                        {" "}
                        +{" "}
                      </span>
                      <span>{quantity}</span>
                      <span
                        className="minus_cart_icon"
                        onClick={() => dispatch(reduce_cart(id))}
                      >
                        {" "}
                        -
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="total_cost">Total cost: ${total_cost}</div>
            <div className="clear_cart" onClick={() => dispatch(clear_cart())}>
              <button>Clear cart</button>
            </div>
          </div>
        ) : (
          <span className="empty_cart">
            <h1>Nothing in the cart</h1>
            <Link to="/products" className="go_back">
              <button>Go Back</button>
            </Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Cart;
