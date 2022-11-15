import React from "react";
import "./styles.css";

function LandingPage() {
  return (
    <div className="home_wrapper">
      <div className="home_main">
        <div className="home_left">
          <div className="header">
            <span className="logo">
              <img src="./images/img1.jpg" alt="logo" />
            </span>
            <span className="store_name">Store</span>
          </div>
          <div className="main_content">
            <div className="first_div">
              <span className="heading">
                Every purchase will be made with a lot of pleasure
              </span>
              <span className="details">
                We work with global companies to availl all goods to you
              </span>
            </div>
            <div className="sign_in">
              <input type="email" name=" sign_in_email" placeholder="Enter Email" />
              <span className="btn">Get started</span>
            </div>
          </div>
        </div>
        <div className="home_right">
          <img src="./images/img2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
