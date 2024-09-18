import React, { useState } from 'react';
import './ProductsAlpha.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faTh, faList } from '@fortawesome/free-solid-svg-icons';
import ProductsBody from './Products-body/ProductsBody';
import ProductsListView from './ProductsListView/ProductsListView';

const ProductsAlpha = () => {
  const [selectedId, setSelectedId] = useState(1); 
  const [transitioning, setTransitioning] = useState(false);

  const handleClick = (id) => {
    if (selectedId !== id) {
      setTransitioning(true);
      setTimeout(() => {
        setSelectedId(id);
        setTransitioning(false);
      }, 300); 
    }
  };

  return (
    <>
      <div className="products-head">
        <div className="products-first-head">
          <p className='h3 fw-bold ps-5 ms-5'>Products</p>
        </div>
        <div className="products-buttons-right pe-5 me-5">
          <div className='products-sort px-2'>
            <p>Sort By</p> 
            <p className='ps-5'><FontAwesomeIcon icon={faCaretDown} /> </p>
          </div>
          <div className='products-sort px-4'>
            <p>Show</p> 
            <p className='ps-5'><FontAwesomeIcon icon={faCaretDown} /> </p>
          </div>
          <div
            className={`products-sort1 px-2 ${selectedId === 1 ? 'clicked' : 'default'}`}
            onClick={() => handleClick(1)}
          >
            <FontAwesomeIcon icon={faTh} /> 
          </div>
          <div
            className={`products-sort1 px-2 ${selectedId === 2 ? 'clicked' : 'default'}`}
            onClick={() => handleClick(2)}
          >
            <FontAwesomeIcon icon={faList} /> 
          </div>
        </div>
      </div>

      <div className={`products-content ${transitioning ? 'products-hidden' : 'products-visible'}`}>
        {selectedId === 1 && <ProductsBody />}
        {selectedId === 2 && <ProductsListView />}
      </div>
    </>
  );
};

export default ProductsAlpha;
