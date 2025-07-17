import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./components/Ourproducts/Products";
import CompanyProfile from "./components/CompanyProfile/CompanyProfile";
import Contact from "./components/contact/Contact";
import ProductDetails from "./components/product-details-page/ProductDetails";
import ProductDetails1 from "./components/form/product-details1";
import ProductDetails2 from "./components/form/product-details2";
import ProductDetails3 from "./components/form/product-details3";
import Demat from './demat/Demat'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/company-profile" element={<CompanyProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-details1" element={<ProductDetails1 />} />
        <Route path="/product-details2" element={<ProductDetails2 />} />
        <Route path="/product-details3" element={<ProductDetails3 />} />
        <Route path="/demat" element={<Demat />} />
      </Routes>
    </div>
  );
};

export default App;
