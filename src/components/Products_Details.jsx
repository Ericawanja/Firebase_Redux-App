import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_review } from "../redux/slices/Review_slice";

function Products_Details() {

  const dispatch = useDispatch();
  const {reviews} = useSelector(state=>state.reviews)
 
  const [reviewing, setReviewing] = useState(false);
  const [reviewFDetails, setReviewFormDetails] = useState({
    review: "",
    stars: 0,
  });
  const [alert, setAlert] = useState(false);
  const handle_review_change = (event) => {
    setAlert(false);
    const { name, value } = event.target;
    //console.log(name, event.target.value);
    setReviewFormDetails({ ...reviewFDetails, [name]: value });
  };

  const handle_review_cancel = () => {
    setReviewFormDetails({review:'', stars:0})
    setReviewing(false)
  };

  const handle_review_save = () => {
    setReviewing(!reviewing)
    if (reviewFDetails.review.trim() !== "" && reviewFDetails.stars <= 5) {
      return dispatch(add_review(reviewFDetails));
    }
    setAlert(true);
  };
  return (
    <div className="p_detail_container">
      <div className="p_inner_wrapper">
        <span className="close_review_page">
          <Link to="/products"> X </Link>
        </span>
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

            <span className="add_review_btn">
              <button onClick={() => setReviewing(!reviewing)}>
                Add review
              </button>
            </span>
          </div>
          {/*Review form ui */}
          {reviewing && (
            <div className="review_form">
              <span className="review_form">
                <span className="review_input">
                  <label htmlFor="review">Enter your review</label>
                  <textarea
                    name="review"
                    id=""
                    cols="40"
                    rows="5"
                    value={reviewFDetails.review}
                    onChange={(e) => handle_review_change(e)}
                  ></textarea>
                  <label htmlFor="stars">
                    How many stars do you give out of 5
                  </label>
                  <input
                    type="number"
                    name="stars"
                    max={5}
                    value={reviewFDetails.stars}
                    onChange={(e) => handle_review_change(e)}
                  />
                  {alert &&<h3 style={{color:'red'}}>
                    The stars should be less than five and the review should not
                    be empty
                  </h3>}
                </span>
                <span className="review_form_btns">
                  <span
                    className="cancel_review_btn"
                    onClick={() => handle_review_cancel()}
                  >
                    <button>Cancel</button>
                  </span>
                  <span
                    className="save_review_btn"
                    onClick={() => handle_review_save()}
                  >
                    <button>save</button>
                  </span>
                </span>
              </span>
            </div>
          )}
          <div className="reviews_list">
            {reviews.length>0 && reviews.map((review, index) => {
              return (
                <div className="review_container" key={index}>
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
            {reviews.length === 0 && <h3>No reviews for this item</h3>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products_Details;
