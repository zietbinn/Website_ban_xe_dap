import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { toast } from 'react-toastify'; // Import toast
import "./ProductCard.css";

const productData = {
  1: { 
    name: 'Turbo Como 4x You', 
    price: '477,999.00', 
    images: ['/images/bike1.png', '/images/bike-detail1.jpg'], 
    colors: ['black', 'green'], 
    sizes: ['XS', 'S', 'XL'],
    description: 'Xe đạp điện cao cấp với công nghệ Turbo Boost.'
  },
  2: { 
    name: 'Turbo Como 4x You', 
    price: '477,999.00', 
    images: ['/images/bike1.png', '/images/bike-detail1.jpg'], 
    colors: ['black', 'green'], 
    sizes: ['XS', 'S', 'XL'],
    description: 'Xe đạp điện cao cấp với công nghệ Turbo Boost.'
  },
  3: { 
    name: 'Turbo Como 4x You', 
    price: '477,999.00', 
    images: ['/images/bike1.png', '/images/bike-detail1.jpg'], 
    colors: ['black', 'green'], 
    sizes: ['XS', 'S', 'XL'],
    description: 'Xe đạp điện cao cấp với công nghệ Turbo Boost.'
  },
  4: { 
    name: 'Turbo Como 4x You', 
    price: '477,999.00', 
    images: ['/images/bike1.png', '/images/bike-detail1.jpg'], 
    colors: ['black', 'green'], 
    sizes: ['XS', 'S', 'XL'],
    description: 'Xe đạp điện cao cấp với công nghệ Turbo Boost.'
  },
  5: { 
    name: 'Turbo Como 4x You', 
    price: '477,999.00', 
    images: ['/images/bike1.png', '/images/bike-detail1.jpg'], 
    colors: ['black', 'green'], 
    sizes: ['XS', 'S', 'XL'],
    description: 'Xe đạp điện cao cấp với công nghệ Turbo Boost.'
  },
};

const ProductCard = () => {
  const { id } = useParams();
  const product = productData[id];
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const { addToCart } = useCart();

  if (!product) return <div className="not-found">Product not found</div>;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select color and size'); // Thông báo lỗi nếu chưa chọn màu hoặc kích thước
      return;
    }

    const productToAdd = {
      id: parseInt(id),
      name: product.name,
      price: product.price,
      image: product.images[0],
      selectedColor,
      selectedSize,
    };

    addToCart(productToAdd);
    toast.success(`Added to cart: ${product.name} (${selectedSize}, ${selectedColor})`); // Thông báo thành công
  };

  return (
    <div className="product-card-container">
      <div className="product-gallery">
        <img src={mainImage} alt={product.name} className="main-image" />
        <div className="thumbnails">
          {product.images.map((img, index) => (
            <img 
              key={index}
              src={img}
              alt={`Thumbnail ${index}`}
              onClick={() => setMainImage(img)}
            />
          ))}
        </div>
      </div>

      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">₫{product.price}</p>
        <p className="description">{product.description}</p>

        <div className="color-options">
          <h3>Color:</h3>
          {product.colors.map((color, index) => (
            <span 
              key={index}
              className={`color-circle ${selectedColor === color ? 'selected' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        <div className="size-options">
          <h3>Size:</h3>
          {product.sizes.map((size, index) => (
            <button
              key={index}
              className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>

        <div className="action-buttons">
          <button className="buy-btn">Buy Now</button>
          <button 
            className="cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;