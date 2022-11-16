import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logOut } from "./features/LogIn/Log_in_slice";
import { useNavigate } from "react-router-dom";

import { getProducts } from "./features/Products/ProductsSlice";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.logged);

  const [categories, setCategories] = useState([1, 2, 3, 4, 5]);

  const handle_logout = () => {
    dispatch(logOut());
    navigate("/");
  };

  return (
    <div className="products_wrapper">
      <div className="header">
        <div className="nav">
          <Link to="products">Products</Link>
          <Link to="About">About</Link>
          <Link to="Contact">Contact</Link>
          <Link to="/products/add">Add product</Link>
          <span className="cart_icon">
            <IconContext.Provider value={{ size: "30px", color: "white" }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
          </span>
        </div>
        <div className="logout">
          <span onClick={handle_logout}>Log Out</span>
        </div>
      </div>
      <div className="products_main">
        <div className="side_nav">
          <div className="side_inner_nav">
            {categories.length > 0 &&
              categories.map((c) => {
                return <Link to="/">Jewellery</Link>;
              })}
          </div>
        </div>

        

        <Outlet />
      </div>
    </div>
  );
}

export default Products;
