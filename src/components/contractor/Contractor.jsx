import "./Contractor.css";
import Video from "../Video";
import CarrierCard from "../CarrierCard";
import CarrierAcoordian from "../CarrierAcoordian";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Contractor = () => {
  useEffect(()=>{
    AOS.init({
 duration:3000,
 offset: 200
    })
  },[])
  return (
    <>
      <Video
        stext="CONTRACTORS"
        ptext="Grow your business with high-quality jobs."
      />
      {/*------------------------ 1ST DIV--------------------- */}
      <div className="container-fluid">
        <div className="container">
          <h1 className="heading py-lg-4">HOW IT WORKS</h1>
          <p className="para" data-aos="fade-right">
            Westhill sends contractors qualified jobs in the insurance and
            institutional markets. Contractors keep in sync with the property
            owner with real-time updates including estimate, scope, and
            schedules for a better customer experience.
          </p>
        </div>
      </div>
      {/*------------------------ card--------------------- */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card ">
            <CarrierCard
              img="img/tick.PNG"
              heading="APPLY TO BECOME A CONTRACTOR"
              text="Tell us about your company, scope of services, and local area so that we can best match you with projects."
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card ">
            <CarrierCard
              img="img/tick.PNG"
              heading="WIN HIGH-QUALITY JOBS WITH WESTHILL"
              text="Thats right! Westhill works closely with insurance carriers and institutions to provide only high-quality jobs. "
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card ">
            <CarrierCard
              img="img/tick.PNG"
              heading="ONE JOB, ONE CONTRACTOR"
              text="Thats right! Westhill works closely with insurance carriers and institutions to provide only high-quality jobs. "
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card ">
            <CarrierCard
              img="img/tick.PNG"
              heading="HIGH-CLOSE RATIO"
              text="Thats right! Westhill works closely with insurance carriers and institutions to provide only high-quality jobs. "
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card ">
            <CarrierCard
              img="img/tick.PNG"
              heading="PAY ONLY ON JOBS YOU WIN"
              text="Thats right! Westhill works closely with insurance carriers and institutions to provide only high-quality jobs. "
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card ">
            <CarrierCard
              img="img/tick.PNG"
              heading="EXPAND YOUR MARKETS"
              text="Thats right! Westhill works closely with insurance carriers and institutions to provide only high-quality jobs. "
            />
          </div>
        </div>
      </div>
      {/* --------------acoordian div --------*/}
      <div className="container-fluid px-lg-3 px-0 contract-acordian">
        <div className="row">
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
          <div className="col-lg-6">
            <CarrierAcoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          </div>
        </div>
      </div>
      {/* last div */}
      <div className="container-fluid last-contract-div">
        <div className="container last-div ">
          <h1 className="text-center pt-lg-5 pt-3">
            READY FOR NEW & EXCITING, HIGH- <br /> QUALITY JOBS?
          </h1>
          <p className="text-center mt-lg-4 mt-3" data-aos="fade-up">
            Book a free analysis & workflow mapping session.
          </p>
          <div className="d-flex justify-content-center">
            <button className=" btn-card mt-lg-4">CONTACT US</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contractor;
