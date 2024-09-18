import React from 'react';
import './CategoryAlpha.css';
import { Link } from "react-router-dom";

function CategoryAlpha({ onCartClick, onCategoryClick }) {
  return (
    <div className="category-alpha">
      <div className="home-category p-5 fw-bold text-white">
        <div>
          <p className='h3'>Category</p>
        </div>
        <div className='d-flex'>
          <Link to="/">
            <span className='text-white pe-2'>Home</span> /
          </Link>
          <Link to="/CategoryProducts" onClick={onCategoryClick}>
            <span className='ps-2'>Category</span>
          </Link>
          <span
            className='ps-2'
            style={{ color: 'grey', cursor: 'pointer' }}
            onClick={onCartClick}
          >
            / Cart
          </span>
        </div>
      </div>
    </div>
  );
}

export default CategoryAlpha;
