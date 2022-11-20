import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add_review } from "../redux/slices/Review_slice";

function Products_Details() {
const {id} = useParams()
const navigate = useNavigate()

  const dispatch = useDispatch();
  const {reviews} = useSelector(state=>state.reviews)
  const products = useSelector((state) => state.products.products_list);
 
  const [reviewing, setReviewing] = useState(false);
  const [reviewFDetails, setReviewFormDetails] = useState({
    review: "",
    stars: 0,
  });
  const [alert, setAlert] = useState(false);

  //filtering the item
  const item =products.filter(p => p.id=== id)
  //filtering the item reviews
  const item_reviews = reviews.filter(r=>r.id === id)
  
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
   
    if (reviewFDetails.review.trim() !== "" && reviewFDetails.stars <= 5) {
      setReviewFormDetails({review:'', stars:0})//resetting form
      setReviewing(!reviewing)
      return dispatch(add_review({...reviewFDetails, id:id}));
    }
    setAlert(true);
  };
  return (
    <div className="p_detail_container">
      <div className="p_inner_wrapper">
        <span className="close_review_page">
          <Link to={navigate(-1)}> X </Link>
        </span>
        <div className="item_details">
          <div className="item_image">
            <img src={item[0].imageUrl} alt="logo" />
          </div>
          <div className="item_detail">
            <span className="item_title">{item[0].name}</span>
            <span className="item_category">Category: {item[0].category}</span>
            <span className="item_price">Price: {item[0].price}</span>
            <span className="item_desc">
            {item[0].description}
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
            {item_reviews.length>0 && item_reviews.map((r, index) => {
              let {review,stars} = r
              return (
                <div className="review_container" key={index}>
                  <span className="stars">Stars: {stars}/5</span>
                  <span className="review">
                    {review}
                  </span>
                </div>
              );
            })}
            {item_reviews.length === 0 && <h3>No reviews for this item</h3>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products_Details;
