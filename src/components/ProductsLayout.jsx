import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdExitToApp } from "react-icons/md";

import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation } from "react-router-dom";
import { logOut } from "../redux/slices/Log_in_slice";
import { useNavigate } from "react-router-dom";

import { getProducts } from "../redux/slices/ProductsSlice";

function ProductsLayout() {
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation()


  const { isLoggedIn } = useSelector((state) => state.logged);
  const { cart_list } = useSelector((state) => state.cart);
  const products = useSelector((state) => state.products.products_list);

  let categories = [];

  const handle_logout = (event) => {
    event.stopPropagation()
    dispatch(logOut());
    navigate("/");
  };

  //calaculating items in the cart
  let items_in_cart = cart_list.reduce((x, y) => {
    if (y.quantity) return x + y.quantity;
    return x + 0;
  }, 0);

  //getting the categories
  const getCategories = () => {
    let All_categories = [];
    for (let i = 0; i < products.length; i++) {
      let new_c = products[i].category;
      All_categories.push(new_c);
    }

    let category_set = new Set(All_categories);
    categories = Array.from(category_set);
  };
  getCategories();

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
          <Link to="/products">Products</Link>
          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
          <Link to="/products/add">Add product</Link>
          <Link className="cart_icon" to="/products/cart">
            <IconContext.Provider value={{ size: "30px", color: "white" }}>
              <AiOutlineShoppingCart />
            </IconContext.Provider>
            <span className="cart_count">{items_in_cart}</span>
          </Link>
        </div>
      </div>
      <div className="products_main">
        <div className="side_nav">
          <div className="side_inner_nav">
            <div className="categories">
              <h2>Categories</h2>
              <span className="categories"  >
              {categories.length > 0 &&
                categories.map((c, index) => {
                  const to = `/products/category/${c}`
                  return (
                  
                      <Link to={to} className= {pathname === to ? 'active': ''} key={index}>
                        {c}
                      </Link>
                    
                  );
                })}
                <Link to='/products' className={pathname === '/products' ? 'active' : ''}>All Products</Link>
                </span>
            </div>
            <div className="logout">
              <span  onClick={(e)=>handle_logout(e)}>
                <IconContext.Provider value={{ size: "30px", color: "black" }}>
                  <MdExitToApp />
                </IconContext.Provider>
              </span>
              <span  onClick={(e)=>handle_logout(e)}>Log Out</span>
            </div>
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
}

export default ProductsLayout;
