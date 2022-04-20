import React from "react";
import "./SectionA.css";
const SectionA = () => {
  return (
    <>
      <video width="100%" height="auto" autoPlay muted loop >
      {/* <video  autoPlay muted loop id="videolayout"> */}
        <source src="img/bg video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="overlay">
          <p className="fw-bold fs-1"> <strong>WELCOME TO WESTHILL</strong> </p>
          <p className="small-text">THE FATEST AND EASY WAY</p>
      </section>
    </>
  );
};

export default SectionA;
