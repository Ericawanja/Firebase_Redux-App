import React from "react";

function Products_Details() {
  return (
    <div>
      <div className="p_inner_wrapper">
        <div className="item_details">
          <div className="item_image">
            <img src="./images/img1.jpg" alt="logo" />
          </div>
          <div className="item_detail">
            <span className="item_title">Tecno cammon</span>
            <span className="item_category">Category: Bag</span>
            <span className="item_price">Price: $677</span>
            <span className="item_desc">Description</span>
          </div>
        </div>
      </div>
      <div className="item_review"></div>
    </div>
  );
}

export default Products_Details;
