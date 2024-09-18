import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryAlpha from './Category-alpha/CategoryAlpha';
import ProductsAlpha from './Products-alpha/ProductsAlpha';
import CartAdd from '../Cart-alpha/CartAdd';

function CategoryProducts() {
  const location = useLocation();
  const [showCartAdd, setShowCartAdd] = useState(false); 

 
  useEffect(() => {
    if (location.state?.showCart) {
      setShowCartAdd(true);
    }
  }, [location.state]);

  const handleCartClick = () => {
    setShowCartAdd(true); 
  };

  const handleCategoryClick = () => {
    setShowCartAdd(false); 
  };

  return (
    <>
      <CategoryAlpha onCartClick={handleCartClick} onCategoryClick={handleCategoryClick} />
      {showCartAdd ? <CartAdd /> : <ProductsAlpha />}
    </>
  );
}

export default CategoryProducts;
