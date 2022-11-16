import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LandingPage from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import { ProtectedRoute } from "./components/ProtectedRoute";

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
          <Route element = {<ProtectedRoute user={isLoggedIn}/>}>
            <Route path="products" element={<Products/>}/>
          </Route>
            

          <Route path="*" element={<h1>Nothing here</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
