import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate, Link } from "react-router-dom";
import "./CartPage.css";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace(",", "")) * item.quantity,
    0
  );

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout");
    }
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(item.id, item.selectedColor, item.selectedSize);
    } else {
      updateQuantity(item.id, item.selectedColor, item.selectedSize, newQuantity);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cart-container">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li
                key={`${item.id}-${item.selectedColor}-${item.selectedSize}`}
                className="cart-item"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                  onClick={() => navigate(`/product/${item.id}`)}
                />
                <div className="cart-item-details">
                  <h3 onClick={() => navigate(`/product/${item.id}`)}>{item.name}</h3>
                  <p>₫{item.price}</p>
                  <div className="item-attributes">
                    {item.selectedColor && <span>Color: {item.selectedColor}</span>}
                    {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                  </div>
                  <div className="quantity-controls">
                    <button
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <div className="item-price">
                  ₫{(parseFloat(item.price.replace(",", "")) * item.quantity).toLocaleString()}
                </div>
                <button
                  className="remove-item"
                  onClick={() =>
                    removeFromCart(item.id, item.selectedColor, item.selectedSize)
                  }
                  aria-label="Remove item"
                >
                  ×
                </button>
              </li>
            ))}
          </ul>

          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₫{totalPrice.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₫{totalPrice.toLocaleString()}</span>
            </div>
            <button
              className="checkout-button"
              onClick={handleCheckout}
              disabled={cartItems.length === 0}
            >
              Proceed to Checkout
            </button>
            <button
              className="continue-shopping"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <p>Your cart is currently empty</p>
          <button className="shopping-button" onClick={() => navigate("/")}>
            Start Shopping
          </button>
        </div>
      )}
    </div>
  );
};

const CartPopup = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <div
      className="cart-icon"
      onMouseEnter={() => setIsPopupVisible(true)}
      onMouseLeave={() => setIsPopupVisible(false)}
    >
      <i className="fas fa-shopping-cart"></i>
      <div className={`cart-hover-popup ${isPopupVisible ? "visible" : ""}`}>
        <div className="cart-content">
          <p>Your Cart</p>
          <div className="cart-buttons">
            <Link to="/cart">
              <button className="view-cart-btn">View Cart</button>
            </Link>
            <Link to="/checkout">
              <button className="checkout-btn">Checkout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
