import React, { useState } from 'react';
import './FoodSlider.css';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const foodItems = [
  { name: 'Salad', image: 'Images/Alpha-slider/salad.png' },
  { name: 'Paneer Tikka', image: 'Images/Alpha-slider/paneer.png' },
  { name: 'Vegetable Biryani', image: 'Images/Alpha-slider/pulao.png' },
  { name: 'Samosa', image: 'Images/Alpha-slider/samosa.png' },
  { name: 'Chole Bhature', image: 'Images/Alpha-slider/chole.png' },
];

const FoodSlider = () => {
  const [current, setCurrent] = useState(0);
  const length = foodItems.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const navigate = useNavigate();

  const handleCategoryClick = () => {
    window.scrollTo(0, 0); 
    navigate('/CategoryProducts');
  };

  return (
    <div className="slider-food" onClick={handleCategoryClick }>
      <button className="prev" onClick={prevSlide}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <div className="slide-content">
        {foodItems.map((food, index) => (
          <div key={index} className="slide">
            <img src={food.image} alt={food.name} className="food-image" />
            <p className="food-name">{food.name}</p>
          </div>
        ))}
      </div>
      <button className="next" onClick={nextSlide}>
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default FoodSlider;
