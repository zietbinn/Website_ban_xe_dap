// src/App.jsx
import React from 'react';
import Header from './components/header/Header'; // Import Header component
import Footer from './components/footer/Footer'; // Import Footer component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // React Router for navigation

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
            <Route path="/products" element={<h1>Products Page</h1>} />
            <Route path="/categories" element={<h1>Categories Page</h1>} />
            <Route path="/about" element={<h1>About Page</h1>} />
            <Route path="/contact" element={<h1>Contact Us Page</h1>} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
