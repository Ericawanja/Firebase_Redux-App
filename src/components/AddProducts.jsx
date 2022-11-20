import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postProducts } from "../redux/slices/ProductsSlice";

function AddProducts() {
  const dispath = useDispatch();
  const navigate = useNavigate();
const [validationAlert, setValidationAlert] = useState(false)
const [empty_field_msg, setEmpty_field] = useState('')
  const [formDetails, setFormDetails] = useState({
    name: "",
    description: "",
    category: "",
    imageUrl: "",
    price: "",
    discount: "",
    review: [],
  });
  const { name, description, price, imageUrl, category, discount} =
    formDetails;
  

  const handle_change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormDetails({ ...formDetails, [name]: value });
  };

  const handle_cancel = () => {
    navigate(-1);
  };
  const handle_submit = () => {
    const numbers =  /^[-+]?[0-9]+$/
    if(formDetails.name.trim()===''){
      setValidationAlert(true)
      setEmpty_field('The product name field does not have values')
      return;
    }
    if(!formDetails.price.match(numbers)){
      setValidationAlert(true)
      setEmpty_field('The price field is empty or the value is not a number')
      return;
    }
    if(!formDetails.discount.match(numbers)){
      setValidationAlert(true)
      setEmpty_field('The discount field is empty or the value is not a number. Enter 0 if the product doesnt have discount')
      return;
    }
    if(formDetails.category.trim()===''){
      setValidationAlert(true)
      setEmpty_field('The category field does not have values')
      return;
    }
    if(formDetails.description.trim()===''){
      setValidationAlert(true)
      setEmpty_field('The description field does not have values')
      return;
    }

    dispath(postProducts(formDetails));
    navigate("/products");
  };

  return (
    <div className="form_wrapper">
      <div className="p_form">
        <label htmlFor="name">Enter product name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => handle_change(e)}
        />

        <label htmlFor="category">Enter product category</label>
        <input
          type="text"
          name="category"
          value={category}
          onChange={(e) => handle_change(e)}
        />

        <label htmlFor="name">Enter product price</label>
        <input
          type="text"
          name="price"
          value={price}
          onChange={(e) => handle_change(e)}
        />

        <label htmlFor="name">Enter product discount</label>
        <input
          type="text"
          name="discount"
          value={discount}
          onChange={(e) => handle_change(e)}
        />

        <label htmlFor="name">Enter product image url</label>
        <input
          type="url"
          name="imageUrl"
          value={imageUrl}
          onChange={(e) => handle_change(e)}
        />

        <label htmlFor="name">Enter product description</label>
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={(e) => handle_change(e)}
        />
{validationAlert  && <h3 style={{color:'red'}}>{empty_field_msg}</h3>}
        <div className="form_btns">
          <span className="cancel" onClick={handle_cancel}>
            Cancel
          </span>
          <span className="save" onClick={handle_submit}>
            Save
          </span>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
