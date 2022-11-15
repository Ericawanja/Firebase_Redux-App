import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Products() {
  const { isLoggedIn } = useSelector((state) => state.logged);
  // console.log(isLoggedIn);
  return (
    <div>
      <div className="header">
        <div className="nav">
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
        </div>
        <div className="logout"><span>Log Out</span></div>
      </div>
    </div>
  );
}

export default Products;
