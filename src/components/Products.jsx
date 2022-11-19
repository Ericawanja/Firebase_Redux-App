import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logOut } from "../redux/slices/Log_in_slice";
import { useNavigate } from "react-router-dom";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.logged);
  const { cart_value, cart_list } = useSelector((state) => state.cart);
  //console.log("value", cart_list);

  const [categories, setCategories] = useState([1, 2, 3, 4, 5]);

  const handle_logout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="products_wrapper">
      <div className="header">
        <div className="logo_container">
          <span className="logo">
            <img src="./images/img1.jpg" alt="logo" />
          </span>
          <span className="store_name">Store</span>
        </div>
        <div className="nav">
          <Link to="products">Products</Link>
          <Link to="About">About</Link>
          <Link to="Contact">Contact</Link>
          <Link to="/products/add">Add product</Link>
          <Link className="cart_icon" to="/products/cart">
            <IconContext.Provider value={{ size: "30px", color: "white" }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
            <span className="cart_count">{cart_value}</span>
          </Link>
        </div>
      </div>
      <div className="products_main">
        <div className="side_nav">
          <div className="side_inner_nav">
            <div className="categories">
              <h2>Categories</h2>
              {categories.length > 0 &&
                categories.map((c, index) => {
                  return (
                    <Link to="/" key={index}>
                      Jewellery
                    </Link>
                  );
                })}
            </div>
            <div className="logout" onClick={handle_logout}>
              <span >
                <IconContext.Provider value={{ size: "30px", color: "black" }}>
                  <MdExitToApp />
                </IconContext.Provider>
              </span>
              <span>Log Out</span>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default Products;
