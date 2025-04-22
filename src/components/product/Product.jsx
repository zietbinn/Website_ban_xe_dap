import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from 'react-toastify'; // Import toast
import "./Product.css";

const Product = () => {
  const { addToCart } = useCart();

  const products = [
    { id: 1, name: "Turbo Como 4x You", price: "477,999.00", colors: ["black", "green"], image: "/images/bike1.png" },
    { id: 2, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
    { id: 3, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
    { id: 4, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
    { id: 5, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
    { id: 6, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
    { id: 7, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
    { id: 8, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
    { id: 9, name: "Turbo Vado 5.0", price: "589,000.00", colors: ["red", "blue"], image: "/images/bike2.png" },
  ];

  const handleAddToCart = (product) => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      selectedColor: product.colors[0],
      selectedSize: "M",
    };
    addToCart(productToAdd);
    toast.success(`Added to cart: ${product.name} (${productToAdd.selectedSize}, ${productToAdd.selectedColor})`); // Thông báo thành công
  };

  return (
    <div className="product-container">
      <h1 className="catalog-title">Catalog</h1>
      <div className="product-layout">
        <aside className="sidebar">
          <h2 className="filter-title">CURRENT FILTERS</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
          </ul>
          <h2 className="filter-title">SHIPPING & PICKUP</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
          </ul>
          <h2 className="filter-title">GROUP</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
          </ul>
          <h2 className="filter-title">COLOR</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
          </ul>
          <h2 className="filter-title">SIZE</h2>
          <ul>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
          </ul>
        </aside>

        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt="Bike" className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">₫{product.price}</p>
                <div className="color-options">
                  {product.colors.map((color, index) => (
                    <span 
                      key={index} 
                      className="color-dot" 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </Link>
              <div className="product-actions">
                <button className="wishlist-btn">♡</button>
                <button 
                  className="cart-btn"
                  onClick={() => handleAddToCart(product)}
                >
                  🛒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pagination">
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <button key={page} className="page-button">{page}</button>
        ))}
      </div>
    </div>
  );
};

export default Product;