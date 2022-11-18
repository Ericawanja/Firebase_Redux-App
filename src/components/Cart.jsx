import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cart() {
  const { cart_list, cart_value } = useSelector((state) => state.cart);
  return (
    <div className="cartWrapper">
      <div className="inner_cart_wrapper">
        {cart_list.length > 0 ? (
          cart_list.map((item) => {
            let { id, name, description, price, discount, imageUrl } = item;
            return (
              <div className="cart_card">
                <div className="cart_left">
                  <div className="cart_img">
                    <img src={imageUrl} alt="product image" />
                  </div>
                  <div className="cart_product_details">
                    <span className="cart_p_title">{name}</span>
                    <span className="cart_p_price">{price}</span>
                    <span className="cart_p_desc">{description}</span>
                  </div>
                </div>
                <div className="cart_right"></div>
              </div>
            );
          })
        ) : (
          <span className="empty_cart">
            <h1>Nothing in the cart</h1>
            <Link to="/products" className="go_back"><button >Go Back</button></Link>
          </span>
        )}
      </div>
    </div>
  );
}

export default Cart;
