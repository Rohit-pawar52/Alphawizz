import React from 'react';
import './ProductsBody.css';
import {useNavigate} from 'react-router-dom';
function ProductsBody() {
    const products = [
        { id: 1, name: 'Salad', image: '/Images/Alpha-slider/salad.png', rating: 4.5, price: '$10.99' },
        { id: 2, name: 'Paneer', image: '/Images/Alpha-slider/paneer.png', rating: 4.2, price: '$8.99' },
        { id: 3, name: 'Chole', image: '/Images/Alpha-slider/chole.png', rating: 4.0, price: '$12.99' },
        { id: 4, name: 'Pulao', image: '/Images/Alpha-slider/pulao.png', rating: 4.8, price: '$15.99' },
        { id: 5, name: 'Samosa', image: '/Images/Alpha-slider/samosa.png', rating: 4.1, price: '$7.99' },
        { id: 6, name: 'Salad', image: '/Images/Alpha-slider/salad.png', rating: 4.6, price: '$18.99' },
      ];
      const navigate = useNavigate();
      const handleCartClick = () => {
        navigate('/CategoryProducts', { state: { showCart: true } });
      };
  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <span className="product-name">{product.name}</span>
            <span className="product-rating">⭐ {product.rating}</span>
          </div>
          <div className="product-bottom">
            <span className="product-price">{product.price}</span>
            {/* <Link to='/'><button className="add-to-cart-btn">Add to Cart</button></Link> */}
            <button className="add-to-cart-btn" onClick={handleCartClick}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductsBody