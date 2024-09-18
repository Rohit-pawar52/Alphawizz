import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./HeadAlpha.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faSearch,
  faShoppingCart,
  faHome
} from "@fortawesome/free-solid-svg-icons";

function HeadAlpha() {
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const navigate = useNavigate();

  const handleLocationSearch = () => {
    console.log(`Searching Location: ${location}`);
  };

  const handleRestaurantSearch = () => {
    console.log(`Searching Restaurant: ${restaurant}`);
  };

  const handleAddRestroClick = () => {
    navigate('/AddRestroAlpha');
  };

  const handleCartClick = () => {
    navigate('/CategoryProducts', { state: { showCart: true } });
  };

  return (
    <>
      <div className="header-alpha">
        <Link to="/">
          <div className="logoandtext">
            <div className="logo-alpha">
              <img
                src="/Images/Alpha-images/logo-alpha.png"
                className="img-logo"
                alt=""
              />
            </div>
            <div className="logo-text">
              <p className="h2 h1-text">ALPHA</p>
              <p className="fw-bold h2-text">FOOD PLATINUM</p>
            </div>
          </div>
        </Link>
        <div className="search-location-restro">
          <div className="location-alpha">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <input
              type="text"
              value={location}
              placeholder="Search Location"
              onChange={(e) => setLocation(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleLocationSearch()}
            />
          </div>
          <span className="separator">|</span>
          <div className="searchrestro-alpha">
            <FontAwesomeIcon icon={faSearch} />
            <input
              type="text"
              value={restaurant}
              placeholder="Search for restaurant"
              onChange={(e) => setRestaurant(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleRestaurantSearch()}
            />
          </div>
        </div>
        <div className="addrestro-alpha">
          <FontAwesomeIcon icon={faHome} />
          <span>
            <button onClick={handleAddRestroClick}>Add Restaurant</button>
          </span>
        </div>
        {/* Cart button triggers navigation to CategoryProducts with cart state */}
        <div className="cart-alpha" onClick={handleCartClick}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="fw-bold h6 text-dark">Cart</span>
        </div>
        <div className="auth-buttons">
          <div className="login-alpha">
          <Link to='/LoginAlpha'><button>Login</button></Link>  
          </div>
          <span className="separator">|</span>
          <div className="register-alpha">
           <Link to='/RegisterAlpha'><button>Register</button></Link> 
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadAlpha;
