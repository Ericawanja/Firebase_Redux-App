import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logOut } from "./features/LogIn/Log_in_slice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getProducts } from "./features/Products/ProductsSlice";

function Products() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoggedIn } = useSelector((state) => state.logged);
  const products = useSelector((state) => state.products.products_list);
  console.log(products);

  const [categories, setCategories] = useState([1, 2, 3, 4, 5]);
  console.log(categories.length);
  const dummy_products = [1, 2, 3, 4, 5, 66, 7, 7];
  const handle_logout = () => {
    dispatch(logOut());
    navigate("/");
  };

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className="products_wrapper">
      <div className="header">
        <div className="nav">
          <Link to="products">Products</Link>
          <Link to="About">About</Link>
          <Link to="Contact">Contact</Link>
          <Link to="Add Product">Add product</Link>
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
                console.log("bbb");
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
