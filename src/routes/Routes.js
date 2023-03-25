import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import ProductDetails from '.././pages/ProductDetails/ProductDetails'
import ContactUs from "../pages/ContactUs/ContactUs";

const Routess = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ProductDetails" element={<ProductDetails />} />
        <Route path="/ContactUs" element={<ContactUs />} />
       
      </Routes>
    </BrowserRouter>
  );
};

export default Routess;
