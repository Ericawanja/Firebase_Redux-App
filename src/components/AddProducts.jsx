import React, { useState, useEffect } from "react";

function AddProducts() {
  const [formDetails, setFormDetails] = useState({
    name: "",
    description: "",
    category: "",
    imageUrl: "",
    price: "",
    discount: "",
    review: [],
  });
  const { name, description, price, imageUrl, category, discount, review } =
    formDetails;

  const handle_change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormDetails({ ...formDetails, [name]: value });
    console.log(formDetails);
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

        <div className="form_btns">
          <span className="cancel">Cancel</span>
          <span className="save">Save</span>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
