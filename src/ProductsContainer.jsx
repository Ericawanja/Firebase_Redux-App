import React from "react";

function ProductsContainer() {
    const dummy_products = [1, 2, 3, 4, 5, 66, 7, 7];
  return (
    <div>
      <div className="products_grid">
        <div className="inner_products_grid">
          {dummy_products.length > 0 &&
            dummy_products.map((product) => {
              return (
                <div className="product_card">
                  <span className="p_img">
                    <img
                      src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
                      alt="product image"
                    />
                  </span>
                  <span className="p_title">Title</span>
                  <span className="p_price"> $ 489</span>
                  <span className="cart_btn">
                    <button>Add to cart</button>
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProductsContainer;
