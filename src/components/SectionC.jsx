import React, { useEffect } from "react";
import "./Sectionc.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
const SectionC = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
     offset: 200
    },[])
  })
  return (
    <>
      <div className="container-fluid bg-color">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <img src="img/A.png" className="img-fluid rounded" alt=""  />
            <div className="d-flex justify-content-center">
              <button className="btn-card mx-5 my-4">POLICYHOLDER</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-4">
            <img src="img/B.png" className="img-fluid rounded" alt="" />
            <div className="d-flex justify-content-center">
              <button className="btn-card mx-5 my-4">POLICYHOLDER</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-4"  data-aos="fade-down-left" >
            <img src="img/D.png" className="img-fluid rounded" alt="" />
            <div className="d-flex justify-content-center">
              <button className="btn-card mx-5 my-4">POLICYHOLDER</button>
            </div>
          </div>
          <div className="col-lg-3 col-md-4"  data-aos="fade-down-left"  >
            <img src="img/C.png" className="img-fluid rounded" alt="" />
            <div className="d-flex justify-content-center">
              <button className="btn-card mx-5 my-4">POLICYHOLDER</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionC;
