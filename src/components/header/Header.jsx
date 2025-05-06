import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useAuth } from '../../context/AuthContext';
import './Header.css';

import logo from '../../assets/images/Logo_HVN.png';
import searchIcon from '../../assets/images/Search_icon.png';
import cartIcon from '../../assets/images/Cart_icon.png';
import userIcon from '../../assets/images/User_icon.png';

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleUserIconClick = () => {
    if (currentUser) {
      navigate('/profile');
    } else {
      navigate('/signin');
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="HVN Logo" />
          </Link>
        </div>

        <nav className="nav-menu">
          <ul>
            <li><Link to="/">Trang Chủ</Link></li>
            <li><Link to="/products">Sản Phẩm</Link></li>
            <li><Link to="/categories">Thuê Xe</Link></li>
            <li><Link to="/about">Bảo Dưỡng</Link></li>
            <li><Link to="/contact">Liên Hệ</Link></li>
          </ul>
        </nav>

        <div className="header-icons">
          <Link to="/search" aria-label="Search">
            <img src={searchIcon} alt="Search" className="icon" />
          </Link>
          <div className="header-cart-container">
            <div className="cart-icon-wrapper" onClick={() => setIsCartOpen(!isCartOpen)}>
              <img src={cartIcon} alt="Cart" className="icon" />
              {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
            </div>
            {isCartOpen && (
              <div className="cart-dropdown">
                {cartItems.length > 0 ? (
                  <>
                    <h3>Your Cart</h3>
                    <ul className="cart-items">
                      {cartItems.map((item, index) => (
                        <li key={index} className="cart-item">
                          <img src={item.image} alt={item.name} className="cart-item-image" />
                          <div className="cart-item-details">
                            <p>{item.name}</p>
                            <p>₫{item.price}</p>
                            <p>Color: {item.selectedColor}</p>
                            <p>Size: {item.selectedSize}</p>
                            <div className="quantity-controls">
                              <button onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity - 1)}>-</button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.selectedColor, item.selectedSize, item.quantity + 1)}>+</button>
                            </div>
                          </div>
                          <button className="remove-item" onClick={() => removeFromCart(item.id, item.selectedColor, item.selectedSize)}>✕</button>
                        </li>
                      ))}
                    </ul>
                    <Link to="/cart" className="view-cart-button" onClick={() => setIsCartOpen(false)}>View Cart</Link>
                  </>
                ) : (
                  <p>Your cart is empty.</p>
                )}
              </div>
            )}
          </div>
          <div onClick={handleUserIconClick} style={{ cursor: 'pointer' }}>
            <img src={userIcon} alt="User" className="icon" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;