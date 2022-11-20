import React from "react";
import { Link } from "react-router-dom";

function Products_Details() {
  const dummy_reviews = [1, 2, 3, 4, 5];
  return (
    <div className="p_detail_container">
      <div className="p_inner_wrapper">
        <span className="close_review_page"><Link to='/products'> X</Link></span>
        <div className="item_details">
          <div className="item_image">
            <img src="/images/img1.jpg" alt="logo" />
          </div>
          <div className="item_detail">
            <span className="item_title">Tecno cammon</span>
            <span className="item_category">Category: Bag</span>
            <span className="item_price">Price: $677</span>
            <span className="item_desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
              earum omnis ea laborum dolor labore sapiente! Odit veniam ipsam id
              at iure earum, nihil exercitationem eum voluptatibus, ab optio
              beatae.
            </span>
          </div>
        </div>

        <div className="item_reviews">
          <div className="reviews_header">
            <span className="review_text">Reviews</span>
            <span className="review_form">
              <span className="review_input">
                <input type="text" />
              </span>
              <span className="add_review">
                <button>Add review</button>
              </span>
            </span>
          </div>
          <div className="reviews_list">
            {dummy_reviews.map((review) => {
              return (
                <div className="review_container">
                  <span className="stars">Stars: 4/5</span>
                  <span className="review">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nesciunt tempora libero aspernatur voluptate officia odio
                    dolor delectus harum porro ab totam, temporibus vitae,
                    repellendus ea molestiae illo adipisci. Soluta, reiciendis.
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products_Details;
