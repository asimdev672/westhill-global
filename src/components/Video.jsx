import React from "react";
import "./Video.css";
const Video = (props) => {
  return (
    <>
      <video width="100%" height="auto" autoPlay muted loop>
        {/* <video  autoPlay muted loop id="videolayout"> */}
        <source src="img/bg video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <section className="overlay">
        <p className="fw-bold fs-1">
          {" "}
          <strong>{props.stext}</strong>{" "}
        </p>
        <p className="small-text">{props.ptext}</p>
      </section>
    </>
  );
};

export default Video;
