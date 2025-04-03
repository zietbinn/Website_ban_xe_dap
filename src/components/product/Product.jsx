import React from "react";
import { Link } from "react-router-dom";
import "./Product.css";

const Product = () => {
  // Dữ liệu sản phẩm mẫu
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

    // Thêm các sản phẩm khác...
  ];

  return (
    <div className="product-container">
      <h1 className="catalog-title">Catalog</h1>
      <div className="product-layout">
        {/* Sidebar Filters - Giữ nguyên như code gốc */}
        <aside className="sidebar">
          <h2 className="filter-title">CURRENT FILTERS</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            {/* ... */}
          </ul>
          <h2 className="filter-title">SHIPPING & PICKUP</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            <li>Epic (5)</li>
            {/* ... */}
          </ul>
          <h2 className="filter-title">GROUP</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
            {/* ... */}
          </ul>
          <h2 className="filter-title">COLOR</h2>
          <ul>
            <li>Bikes (13)</li>
            <li>Epic (5)</li>
            {/* ... */}
          </ul>
          <h2 className="filter-title">SIZE</h2>
          <ul>
            <li>M</li>
            <li>L</li>
            <li>XL</li>
            {/* ... */}
          </ul>
        </aside>

        {/* Product Listing - Cập nhật để link tới trang chi tiết */}
        <div className="product-list">
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id} className="product-card">
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
              <div className="product-actions">
                <button className="wishlist-btn">♡</button>
                <button className="cart-btn">🛒</button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination - Giữ nguyên */}
      <div className="pagination">
        {[1, 2, 3, 4, 5, 6].map((page) => (
          <button key={page} className="page-button">{page}</button>
        ))}
      </div>
    </div>
  );
};

export default Product;