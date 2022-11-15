import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOut } from "./features/LogIn/Log_in_slice";
import { useNavigate } from "react-router-dom";

function Products() {
  const { isLoggedIn } = useSelector((state) => state.logged);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handle_logout =()=>{
    dispatch(logOut())
    navigate('/')
  }
  return (
    <div className="products_wrapper">
      <div className="header">
        <div className="nav">
          <Link to="products">Products</Link>
          <Link to="About">About</Link>
          <Link to="Contact">Contact</Link>
        </div>
        <div className="logout">
          <span onClick={handle_logout}>Log Out</span>
        </div>
      </div>
      <div className="products_main">
        <div className="categories_nav">
             

        </div>
        <div className="products_grid"></div>
      </div>
    </div>
  );
}

export default Products;
