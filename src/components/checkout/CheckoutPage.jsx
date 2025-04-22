import React, { useState, useRef, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CheckoutPage.css';

const CheckoutPage = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();
  const formRef = useRef(null); // Form reference

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'Cash on Delivery',
  });

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.replace(',', '')) * item.quantity,
    0
  );

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = () => {
    const { fullName, email, phone, address } = formData;
    if (!fullName || !email || !phone || !address) {
      toast.error('Please fill in all required fields!', { position: 'top-right' });
      return;
    }

    // Toast success
    toast.success('Order placed successfully!', { position: 'top-right' });

    // Clear form after short delay
    setTimeout(() => {
      clearCart(); // Xóa giỏ hàng trong context
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        paymentMethod: 'Cash on Delivery',
      });
      formRef.current?.reset(); // Reset thẳng vào form DOM
    }, 500);

    // Navigate sau toast
    setTimeout(() => navigate('/'), 3000);
  };

  useEffect(() => {
    // Re-render khi cart rỗng
  }, [cartItems]);

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">
        <div className="checkout-summary">
          <h2>Order Summary</h2>
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul className="order-items">
              {cartItems.map((item, index) => (
                <li key={index} className="order-item">
                  <div className="item-info">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <h3>{item.name}</h3>
                      <p>Color: {item.selectedColor}</p>
                      <p>Size: {item.selectedSize}</p>
                    </div>
                  </div>
                  <div className="item-quantity-price">
                    <span>Qty: {item.quantity}</span>
                    <span>₫{(parseFloat(item.price.replace(',', '')) * item.quantity).toLocaleString()}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="order-total">
            <div className="total-row">
              <span>Subtotal:</span>
              <span>₫{totalPrice.toLocaleString()}</span>
            </div>
            <div className="total-row">
              <span>Shipping:</span>
              <span>Free</span>
            </div>
            <div className="total-row grand-total">
              <span>Total:</span>
              <span>₫{totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="checkout-form">
          <h2>Shipping Information</h2>
          <form ref={formRef}>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <textarea
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              ></textarea>
            </div>

            <h2>Payment Method</h2>
            <div className="payment-methods">
              <label className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Cash on Delivery"
                  checked={formData.paymentMethod === 'Cash on Delivery'}
                  onChange={handleInputChange}
                />
                <span>Cash on Delivery</span>
              </label>
              <label className="payment-method">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="Credit Card"
                  checked={formData.paymentMethod === 'Credit Card'}
                  onChange={handleInputChange}
                />
                <span>Credit Card</span>
              </label>
            </div>

            <button
              type="button"
              className="place-order-btn"
              onClick={handlePlaceOrder}
              disabled={cartItems.length === 0}
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
