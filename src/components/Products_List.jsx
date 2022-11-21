import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_cart_product,
  reduce_cart,
  getCart,
  postCart,
  updateCart,
  deleteCart
} from "../redux/slices/cart_slice";
import { Link } from "react-router-dom";

function Products_list({ products }) {
  const dispatch = useDispatch();
  const { cart_list } = useSelector((state) => state.cart);
  const handle_cart_add = (item) => {
    //check iof item exist in cart
    let item_index = cart_list.findIndex((c_item) => c_item.id === item.id);

    //if not in cart add, else update quantity
    //console.log(cart_list, item_index);
    if (item_index === -1) {
      let newItem = { ...item, quantity: item.quantity + 1 };
      console.log(newItem);
      dispatch(postCart(newItem));
    } else {
      let cart_item = cart_list[item_index];

      let new_item_details = { ...cart_item, quantity: cart_item.quantity + 1 };

      dispatch(updateCart(new_item_details));
    }
  };

  const handle_cart_decrease = (item) => {
    let item_index = cart_list.findIndex((c_item) => c_item.id === item.id);
    let cart_item = cart_list[item_index]
  
    if (cart_item.quantity === 1) {
        console.log('d');
      dispatch(deleteCart(cart_item))
    } else {
      //check iof item exist in cart
      
      let cart_item = cart_list[item_index];
      let new_item_details = { ...cart_item, quantity: cart_item.quantity - 1 };
      dispatch(updateCart(new_item_details));
     
    }
  };
  useEffect(() => {


    dispatch(getCart());
  }, []);
  return (
    <div className="products_grid">
      <div className="inner_products_grid">
        {products &&
          products.map((product, index) => {
            let { id, name, price, imageUrl } = product;

            return (
              <div className="product_card" key={index}>
                <span className="p_img">
                  <Link to={`/products/${id}`}>
                    <img src={imageUrl} alt="product image" />
                  </Link>
                </span>
                <span className="p_title">{name}</span>
                <span className="p_price"> ${price}</span>

                {cart_list.find((c_item) => product.id === c_item.id) ? (
                  <span className="cart_btn extra_btns">
                    <span
                      className="plus_cart_icon"
                      onClick={() => handle_cart_add(product)}
                    >
                      {" "}
                      +{" "}
                    </span>
                    <span>
                      {
                        cart_list.find((c_item) => product.id === c_item.id)
                          .quantity
                      }
                    </span>
                    <span
                      className="minus_cart_icon"
                      onClick={() => handle_cart_decrease(product)}
                    >
                      {" "}
                      -
                    </span>
                  </span>
                ) : (
                  <span
                    className="cart_btn"
                    onClick={() => handle_cart_add(product)}
                  >
                    <button>Add to cart</button>
                  </span>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products_list;
