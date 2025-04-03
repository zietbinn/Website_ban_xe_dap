import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const heroImage = 'https://via.placeholder.com/1200x400?text=Hero+Bike';
const featureImage1 = 'https://via.placeholder.com/600x200?text=Feature+1';
const featureImage2 = 'https://via.placeholder.com/600x200?text=Feature+2';
const bike1 = 'https://via.placeholder.com/300x150?text=Freedom+2';
const bike2 = 'https://via.placeholder.com/300x150?text=Freedom+ST';
const bike3 = 'https://via.placeholder.com/300x150?text=Freedom+X';
const bike4 = 'https://via.placeholder.com/300x150?text=Freedom+Fatty+2';


const HomePage = () => {
  return (
    <div className="homepage-container">
      {/* Product Lineup Section - Đưa lên đầu tiên */}
      <section className="lineup-section">
        <h2 className="lineup-title">The full line up</h2>
        <p className="lineup-subtitle">A variety of electric bike models for every rider.</p>
        <div className="lineup-container">
          <div className="lineup-card">
            <img src={bike1} alt="Freedom 2" className="lineup-image" />
            <h3>Freedom 2</h3>
            <div className="stars">★★★★★</div>
            <p>128 Reviews</p>
            <p>Fits most riders 5'6" - 6'4"</p>
            <p>From $1,098 <span className="original-price">$1,798</span></p>
          </div>
          <div className="lineup-card">
            <img src={bike2} alt="Freedom ST" className="lineup-image" />
            <h3>Freedom ST</h3>
            <div className="stars">★★★★★</div>
            <p>247 Reviews</p>
            <p>Fits most riders 5'1" - 6'2"</p>
            <p>From $1,298 <span className="original-price">$1,999</span></p>
          </div>
          <div className="lineup-card">
            <img src={bike3} alt="Freedom X" className="lineup-image" />
            <h3>Freedom X</h3>
            <div className="stars">★★★★★</div>
            <p>247 Reviews</p>
            <p>Fits most riders 5'6" - 6'4"</p>
            <p>From $1,198 <span className="original-price">$1,996</span></p>
          </div>
          <div className="lineup-card">
            <img src={bike4} alt="Freedom Fatty 2" className="lineup-image" />
            <h3>Freedom Fatty 2</h3>
            <div className="stars">★★★★★</div>
            <p>247 Reviews</p>
            <p>Fits most riders 5'2" - 6'3"</p>
            <p>From $1,298 <span className="original-price">$1,999</span></p>
          </div>
        </div>
        <Link to="/products" className="shop-all-button">Shop All Products & Accessories</Link>
      </section>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">HVN</h1>
          <img src={heroImage} alt="Hero Bike" className="hero-image" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-card">
          <img src={featureImage1} alt="Feature 1" className="feature-image" />
          <h2>FULL FEATURED</h2>
          <p>Removable batteries, theft defence, control display and more!</p>
          <Link to="/products" className="feature-button">Learn More</Link>
        </div>
        <div className="feature-card">
          <img src={featureImage2} alt="Feature 2" className="feature-image" />
          <h2>TRY BEFORE YOU BUY</h2>
          <p>Book a test ride today and become one of the tens of humans that experience freedom</p>
          <Link to="/contact" className="feature-button">Book Today</Link>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="reviews-section">
        <h2 className="reviews-title">Why do our fans love our bikes?</h2>
        <p className="reviews-subtitle">
          Check out a few verified customer reviews and find out why people think we have the best bikes
        </p>
        <div className="reviews-container">
          <div className="review-card">
            <h3>Jeff Ellis</h3>
            <p className="reviewer-status">Verified Buyer</p>
            <div className="stars">★★★★★</div>
            <h4>Impressed with the quality.</h4>
            <p>
              I recently purchased some products from this store and was impressed with the quality of the products. The ordering process was easy and the shipping was fast. I have already noticed a difference in my lifestyle. I will definitely be shopping here again.
            </p>
            <Link to="#" className="read-more">Read more</Link>
            <p className="review-source">Powered by Twitter</p>
          </div>
          <div className="review-card">
            <h3>Marie J Mills</h3>
            <p className="reviewer-status">Verified Buyer</p>
            <div className="stars">★★★★★</div>
            <h4>The crew at WING bikes are fantastic.</h4>
            <p>
              Love my first electric bike. After carefully shopping for the best, I found everything you need.
            </p>
            <Link to="#" className="read-more">Read more</Link>
            <p className="review-source">Powered by Facebook</p>
          </div>
          <div className="review-card">
            <h3>Jane Butler</h3>
            <p className="reviewer-status">Verified Buyer</p>
            <div className="stars">★★★★★</div>
            <h4>Super friendly people and great E-bikes</h4>
            <p>
              I recently purchased some products from this store and was impressed with the quality of the products. The ordering process was easy and the shipping was fast. I have already noticed a difference in my lifestyle. I will definitely be shopping here again.
            </p>
            <Link to="#" className="read-more">Read more</Link>
            <p className="review-source">Powered by Google</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="benefit-item">
          <span className="benefit-icon">🚚</span>
          <p>Free shipping on all E-bikes</p>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">📦</span>
          <p>Not satisfied? We've got easy returns</p>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">🚴</span>
          <p>Test rides available</p>
        </div>
        <div className="benefit-item">
          <span className="benefit-icon">🔧</span>
          <p>Quick, hassle-free setup</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;