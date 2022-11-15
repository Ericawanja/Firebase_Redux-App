import "./App.css";
import React from "react";
import LandingPage from "./components/LandingPage";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Products from "./components/Products";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="products" element={<Products/>}/>
      </Routes>
      </BrowserRouter>
  
    </div>
  );
}

export default App;
