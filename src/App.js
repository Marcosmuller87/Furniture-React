import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import {
  productData,
  productData2,
  productData3,
} from "./components/Products/data";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Hero />
      <Products
        id="indoor"
        heading="Our Indoor Furniture!"
        data={productData}
      ></Products>
      <Products heading="Our Outdoor Furniture!" data={productData2} />
      <Feature />
      <Products heading="Check This Out!" data={productData3} />
      <Footer />
    </Router>
  );
}

export default App;
