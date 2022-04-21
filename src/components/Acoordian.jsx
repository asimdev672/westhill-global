import React, { useState } from "react";
import "./Acoordian.css";

const Acoordian = (props) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="acordian-div my-lg-4 my-2 pb-2">
        <div
          className="d-flex justify-content-between pt-3 acordian-h"
          onClick={() => setShow(!show)}
        >
          <h4>{props.heading}</h4>
          <img
            src={show ? "img/minus.png" : "img/plus.png"}
            className="img-fluid d-flex imgs"
            alt=""
          />
        </div>
        <div className="text-bg">
          {show
            ? " Westhills online platform helps manage repairs from the moment you select a contractor all the way to project completion, giving you transparency every step of the way. "
            : ""}
        </div>
      </div>
    </>
  );
};

export default Acoordian;
