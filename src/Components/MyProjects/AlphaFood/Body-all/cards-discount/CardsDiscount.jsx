import React from 'react';
import './CardsDiscount.css';

const CardsDiscount = () => {
  return (
    <div className="card-container">
      <div className="card"
        style={{ backgroundImage: `url('Images/Alpha-slider/paneer.png')` }}>
        <div className="card-content">
            <h3>TODAY OFFER</h3>
          <h2>25% Off</h2>
          <p>On all Veg Items</p>
        </div>
      </div>
      <div className="card card2" style={{ backgroundImage: `url('Images/Alpha-slider/samosa.png')` }}>
        <div className="card-content">
        <h3>OTHER OFFER</h3>
          <h2>Buy 1 Get 1</h2>
          <p>On all Desserts</p>
        </div>
      </div>
      <div className="card" style={{ backgroundImage: `url('Images/Alpha-slider/pulao.png')` }}>
        <div className="card-content">
        <h3>TODAY OFFER</h3>
          <h2>20% Off</h2>
          <p>On Orders Above ₹500</p>
        </div>
      </div>
    </div>
  );
};

export default CardsDiscount;
