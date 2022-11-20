import "./App.css";
import "./components/styles.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AddProducts from "./components/AddProducts";
import ProductsContainer from "./components/ProductsContainer";
import Cart from "./components/Cart";
import Product_category from "./components/Product_category";
import Products_Details from "./components/Products_Details";

function App() {
  const { isLoggedIn } = useSelector((state) => state.logged);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path='products' element={<ProtectedRoute user={isLoggedIn}>
            <Products/>
          </ProtectedRoute>}/> */}
          <Route element={<ProtectedRoute user={isLoggedIn} />}>
            <Route path="products" element={<Products/>}>
              
              <Route index element={<ProductsContainer/>} />
              <Route path="add" element={<AddProducts />} />
              <Route path="category/:category" element={<Product_category/>}/>
              <Route path=":id" element={<Products_Details/>}/>
              <Route path="cart" element={<Cart/>}/>
            </Route>
          </Route>

          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
