import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import { useDispatch, useSelector } from "react-redux";

import { logIn, logOut } from "./features/LogIn/Log_in_slice";

function LandingPage() {
  const dispatch = useDispatch();

  const [email,setEmail] = useState('')
  const  emailId = useRef()
  const navigate = useNavigate()
  const {isLoggedIn} = useSelector(state => state.logged)
  const handle_log = () => {
    if(email.trim() === '') return emailId.current.focus()
    console.log('f');
    
    dispatch(logIn());
  
      navigate('products')
    
  };
  console.log(isLoggedIn);
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
              <input
                type="email"
                name=" sign_in_email"
                placeholder="Enter Email"
                value = {email}
                ref= {emailId}
                onChange={(e)=>setEmail(e.target.value)}
              />
              <span className="btn"  onClick={handle_log}>
                <button >Get Started</button>
              </span>
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
