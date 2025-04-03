import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng react-router-dom để điều hướng
import './Header.css'; // File CSS để style header

// Import các assets (logo, icons)
import logo from '../../assets/images/Logo_HVN.png'; // Đường dẫn đến logo của bạn
import searchIcon from '../../assets/images/Search_icon.png'; // Đường dẫn đến icon search
import cartIcon from '../../assets/images/Cart_icon.png'; // Đường dẫn đến icon cart
import userIcon from '../../assets/images/User_icon.png'; // Đường dẫn đến icon user

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="HVN Logo" />
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>

        {/* Icons (Search, Cart, User) */}
        <div className="header-icons">
          <Link to="/search" aria-label="Search">
            <img src={searchIcon} alt="Search" className="icon" />
          </Link>
          <Link to="/products" aria-label="Products"> 
            <img src={cartIcon} alt="Cart" className="icon" />
          </Link>
          <Link to="/signin" aria-label="Sign In">
            <img src={userIcon} alt="User" className="icon" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;