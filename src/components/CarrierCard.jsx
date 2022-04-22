import React from "react";
import "./CarrierCard.css";
const CarrierCard = (props) => {
  return (
    <>
      <img src={props.img} alt="" />
      <h4 className="text-center carrier-card-h py-3">{props.heading}</h4>
      <p className="text-center mb-5 py-sm-3 ">{props.text}</p>
    </>
  );
};

export default CarrierCard;
