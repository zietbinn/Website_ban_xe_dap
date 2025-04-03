import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  // State để lưu giá trị của các trường
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // State để lưu lỗi của các trường
  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  // Hàm xử lý khi người dùng thay đổi giá trị trong ô nhập liệu
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Kiểm tra lỗi ngay khi người dùng nhập
    validateField(name, value);
  };

  // Hàm kiểm tra lỗi cho từng trường
  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
        if (!value.trim()) {
          error = 'First Name is required';
        }
        break;
      case 'lastName':
        if (!value.trim()) {
          error = 'Last Name is required';
        }
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'phone':
        if (!value.trim()) {
          error = 'Phone number is required';
        } else if (!/^\+?[0-9]{10,15}$/.test(value)) {
          error = 'Invalid phone number (10-15 digits, can start with +)';
        }
        break;
      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  // Hàm kiểm tra toàn bộ form trước khi gửi
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      validateField(key, formData[key]);
      if (!formData[key].trim()) {
        newErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } is required`;
      }
    });

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  // Hàm xử lý khi người dùng nhấn nút Send
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      // Xử lý gửi form (ví dụ: gửi dữ liệu đến server)
      console.log('Form submitted:', formData);
      // Reset form sau khi gửi thành công
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
      setErrors({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    } else {
      console.log('Form has errors');
    }
  };

  // Kiểm tra xem form có hợp lệ không để enable/disable nút Send
  const isFormValid = () => {
    return (
      Object.values(formData).every((value) => value.trim() !== '') &&
      Object.values(errors).every((error) => error === '')
    );
  };

  return (
    <div className="contact-us-container">
      {/* Contact Form Section */}
      <div className="contact-form">
        <h1>CONTACT US</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="input-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                className="input-field"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <span className="error-message">{errors.firstName}</span>
              )}
            </div>
            <div className="input-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="input-field"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <span className="error-message">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                placeholder="Phone number"
                className="input-field"
                value={formData.phone}
                onChange={handleChange}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Message"
                className="textarea-field"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="send-button"
            disabled={!isFormValid()}
          >
            Send
          </button>
        </form>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.6574509020306!2d105.78236867531247!3d21.046387980607324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abb158a2305d%3A0x5c357d21c785ea3d!2zVHLGsOG7nW5nIMSQ4bqhaSho4buNYyDEkGnhu4duIEzhu7Fj!5e0!3m2!1svi!2s!4v1743582808844!5m2!1svi!2s"
          width="1200"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Map"
        ></iframe>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <div className="info-item">
          <span className="icon">🏠</span>
          <p>
            HA NOI BRANCH<br />
            HO CHI MINH BRANCH<br />
            LOS ANGELES
          </p>
        </div>
        <div className="info-item">
          <span className="icon">📞</span>
          <p>
            (+84) 1234-5678<br />
            (+84) 6666-8888<br />
            (213) 054-2004
          </p>
        </div>
        <div className="info-item">
          <span className="icon">✉️</span>
          <p>
            xuav39@gmail.com<br />
            cdj@gmail.com<br />
            loganlee@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;