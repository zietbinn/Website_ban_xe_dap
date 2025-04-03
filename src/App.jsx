import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ContactUs from "./components/contact/ContactUs";
import SignIn from "./components/signin/SignIn";
import Products from "./components/product/Product";
import ProductCard from "./components/product/ProductCard";
import Home from "./components/home/HomePage"; // Import Home component

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductCard />} />
            <Route path="/categories" element={<h1>Categories Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
