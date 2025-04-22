import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import ContactUs from './components/contact/ContactUs';
import SignIn from './components/signin/SignIn';
import SignUp from './components/signup/SignUp'; 
import Profile from './components/profile/Profile';
import HomePage from './components/home/HomePage';
import Product from './components/product/Product';
import ProductCard from './components/product/ProductCard';
import CartPage from './components/cart/CartPage';
import CheckoutPage from './components/checkout/CheckoutPage'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute';
import NotFound from './components/error/NotFound'; // Trang 404

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <main className="main-content">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<Product />} />
                <Route path="/product/:id" element={<ProductCard />} />
                <Route path="/categories" element={<h1>Categories Page</h1>} />
                <Route path="/about" element={<h1>About Page</h1>} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} /> {/* Thêm route cho SignUp */}
                <Route path="/cart" element={<CartPage />} />
                
                {/* Protected Routes */}
                <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                </Route>
                
                {/* Error Handling */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
            <ToastContainer
              position="top-right"
              autoClose={4000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
