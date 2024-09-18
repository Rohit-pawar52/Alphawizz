import React from 'react';
import './Restaurent.css';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faStar } from '@fortawesome/free-solid-svg-icons';

function Restaurent() {
  const cards = [
    { img: 'Images/Alpha-restro/restro1.jpg', name: 'Restaurant 1', rating: '4.5', type: 'Veg Restaurant', city: 'Indore' },
    { img: 'Images/Alpha-restro/restro2.jpg', name: 'Restaurant 2', rating: '4.0', type: 'Veg Restaurant', city: 'Indore' },
    { img: 'Images/Alpha-restro/restro3.jpg', name: 'Restaurant 3', rating: '4.2', type: 'Veg Restaurant', city: 'Indore' },
    { img: 'Images/Alpha-restro/restro4.jpg', name: 'Restaurant 4', rating: '4.6', type: 'Veg Restaurant', city: 'Indore' },
    { img: 'Images/Alpha-restro/restro5.jpg', name: 'Restaurant 5', rating: '4.3', type: 'Veg Restaurant', city: 'Indore' },
    { img: 'Images/Alpha-restro/restro6.jpg', name: 'Restaurant 6', rating: '4.7', type: 'Veg Restaurant', city: 'Indore' },
  ];

  const navigate = useNavigate();

  const handleCategoryClick = () => {
    window.scrollTo(0, 0); 
    navigate('/CategoryProducts');
  };

  return (
    <>
      <div className="restro-head">
        <div className='Restro-h1'>
          <h3>Restaurant</h3>
          <p>Explore curated lists of top restaurants</p>
        </div>
        <div className="restro-button me-5 pe-5">
          <button>Veg & Non Veg</button>
          <button>Non Veg</button>
          <button className='me-2'>Pure veg</button>
        </div>
      </div>

      <div className="card-container-restro">
        {cards.map((card, index) => (
          <div className="card-restro" key={index} onClick={handleCategoryClick}>
            <img src={card.img} alt={card.name} className="card-img" />
            <div className="card-info">
              <div className="card-header">
                <h3>{card.name}</h3>
                <div className="card-rating">
                  <FontAwesomeIcon icon={faStar} />
                  <span>{card.rating}</span>
                </div>
              </div>
              <div className="card-type">
                <span>{card.type}</span>
              </div>
              <div className="card-location">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span>{card.city}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Restaurent;
