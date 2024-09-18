import React from "react";
import "./BodyAlpha.css";
import FoodSlider from "./food-slider/FoodSlider";
import CardsDiscount from "./cards-discount/CardsDiscount";
import Restaurent from "./Restaurents/Restaurent";
function BodyAlpha() {
  return (
    <>
    <div className="body-alpha">
      <img src="/Images/Alpha-images/body-alpha.jpg" alt="" />
    </div>
    <FoodSlider/>
    <CardsDiscount/>
    <Restaurent/>
    </>
  );
}

export default BodyAlpha;
