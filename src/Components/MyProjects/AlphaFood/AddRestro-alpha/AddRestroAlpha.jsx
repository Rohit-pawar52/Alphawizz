import React from "react";
import "./AddRestroAlpha.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faLocationDot,
  faHome,
  faShop ,
  faShoppingCart,
  faFileLines,
} from "@fortawesome/free-solid-svg-icons";
function AddRestroAlpha() {
  return (
    <>
      <div className="add-restro1">
        <div className="left-restro-content">
          <p className="h2">Partner with us</p>
          <p className="h2">at 0% commision for the 1st month!</p>
          <p>
            and get ads worth INR 1500. Valid for new restaurant selected
            cities.
          </p>
          <div className="pt-4">
            <span className="button-restro1">Register your restaurant</span>
          </div>
        </div>
        <div className="right-restro-content">
          <img
            src="Images/Alpha-images/Addrestro.png"
            alt=""
            style={{ width: "100%", height: "200px" }}
          />
        </div>
      </div>
      <div className="add-restro2">
        <div className="add-restro2-content">
          <p className="h2 fw-bold">Get started with online ordering</p>
          <p>Please keep the document ready for smooth signup</p>
        </div>
        <div className="add-restro2-content">
          <p>
            {" "}
            <span>
              <FontAwesomeIcon icon={faCheck} className="icon123" /> FSSAI
              license copy
            </span>
          </p>
          <p>
            {" "}
            <span>
              <FontAwesomeIcon icon={faCheck} className="icon123" /> Your
              restaurant menu
            </span>
          </p>
          <p>
            {" "}
            <span>
              <FontAwesomeIcon icon={faCheck} className="icon123" /> Bank
              account details
            </span>
          </p>
        </div>
        <div className="add-restro2-content">
          <p>
            {" "}
            <span>
              <FontAwesomeIcon icon={faCheck} className="icon123" /> Regular
              GSTIN (if applicable)
            </span>
          </p>
          <p>
            {" "}
            <span>
              <FontAwesomeIcon icon={faCheck} className="icon123" /> Pan card
              copy
            </span>
          </p>
          <p>
            {" "}
            <span>
              <FontAwesomeIcon icon={faCheck} className="icon123" /> Dish images
              for top 5 items
            </span>
          </p>
        </div>
      </div>
      <div className="add-restro3">
        <div className="add-restro3-headings">
          <p className="h3 fw-bold">
            Why should you partner with<br></br> jetsetter india ?
          </p>
          <p>
            Jetsetter india enables you to get 60% more revenue, 10x new
            customer and boost your brand<br></br> visibility by insights to
            improve your business
          </p>
        </div>
        <div className="add-restro3-container">
          <div className="add-restro3-content">
            <p className="icon-restro3">
              <FontAwesomeIcon icon={faLocationDot} />
            </p>{" "}
            <p>1000 plus cities in india</p>
          </div>
          <div className="add-restro3-content">
            <p className="icon-restro3">
              <FontAwesomeIcon icon={faHome} />
            </p>{" "}
            <p>3 lakh+ restaurant listings</p>
          </div>
          <div className="add-restro3-content">
            <p className="icon-restro3">
              <FontAwesomeIcon icon={faShoppingCart} />
            </p>{" "}
            <p>5.0 crore+ monthly orders</p>
          </div>
        </div>
      </div>
      <div className="add-restro4">
        <p className="text-center h3 fw-bold">How it works</p>
        <div className="order-process">
          <div className="order-process-content">
          <div><FontAwesomeIcon icon={faFileLines} /></div>
          <p className="h3">Step1</p>
          <p>Create your page on jetsetter india help users discover your place by creating a listing on jetsetter india</p>
          </div>
          <div className="order-process-content">
          <div><FontAwesomeIcon icon={ faShop } /></div>
          <p className="h3">Step2</p>
          <p>Register for online ordering and deliver orders to millions of customers with ease </p>
          </div>
          <div className="order-process-content">
          <div><FontAwesomeIcon icon={faShoppingCart} /></div>
          <p className="h3">Step3</p>
          <p>Start receiving orders online orders on our partners app, web dashboard or API partners</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddRestroAlpha;
