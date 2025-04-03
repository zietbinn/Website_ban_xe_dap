import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router for navigation
import Header from './components/header/Header'; // Import Header component
import Footer from './components/footer/Footer'; // Import Footer component
import ContactUs from './components/contact/ContactUs'; // Import ContactUs component
import SignIn from './components/signin/SignIn'; // Import SignIn component
import Products from './components/product/Product'; // Import Products component
import ProductCard from './components/product/ProductCard'; // Import ProductCard component

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header />

        {/* Main content area */}
        <main>
          <Routes>
            {/* Các route của ứng dụng */}
            <Route path="/" element={<h1>Home Page</h1>} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<ProductCard />} /> {/* Route cho trang chi tiết sản phẩm */}
            <Route path="/categories" element={<h1>Categories Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/signin" element={<SignIn />} /> {/* Route cho SignIn */}
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
