import React from "react";
import { useEffect } from "react";
import "./Plateform.css";
import Video from "../Video";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Plateform = () => {
    useEffect(()=>{
        AOS.init({
     duration:2000,
     offset: 200
        })
      },[])
  return (
    <>
      <Video
        stext="OUR PLATFORM"
        ptext="The first, and leading fully-digital managed repair experience in the industry."
      />
      {/*------------------------ 1ST DIV--------------------- */}
      <div className="container-fluid py-lg-5">
        <div className="container">
          <h1 className="heading py-lg-4">
            TECHNOLOGY FOR A BETTER CUSTOMER EXPERIENCE.
          </h1>
          <p className="parass" data-aos="fade-down">
            The Westhill platform combines cutting-edge technology with
            exceptional human touch to deliver "wow" experiences when it matters
            most. We are driving transparency and collaboration by connecting
            property owners, insurance carriers and the nation’s premier
            contractors – to bring out the best in everyone. By championing each
            constituency and aligning interests, we ensure the most value is
            derived from our platform.
          </p>
        </div>
      </div>
                          {/* contact div */}
                          <div className="container-fluid contact-div-card">
                                <div className="container">
                                    <img src="img/contact.webp" className="img-fluid" alt="" />
                                </div>
                          </div>
                          <div className="container-fluid">
        <div className="container">
          <h1 className="heading py-lg-4">HOW IT WORKS</h1>
          <p className="parass " data-aos="fade-up">View, research, and select a contractor</p>
          <p className="parass" data-aos="fade-up">Schedule a site visit</p>
          <p className="parass" data-aos="fade-up">Receive estimate and coordinate approval</p>
          <p className="parass" data-aos="fade-up">Coordinate, track, and manage all aspects of the repair process </p>
          <p className="parass" data-aos="fade-up">Measure and ensure customer  satisfaction</p>
        </div>
      </div>
      <div className="container-fluid py-lg-5 platform-last-div">
      <div className="container last-div">
        <h1 className="text-center mt-lg-5 mt-3">
        WANT TO TAKE PROPERTY REPAIR 
          <br /> TO THE NEXT LEVEL?
        </h1>
        <div className="d-flex justify-content-center">
          <button className=" btn-card mt-lg-4" data-aos="zoom-in-up">CONTACT US</button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Plateform;
