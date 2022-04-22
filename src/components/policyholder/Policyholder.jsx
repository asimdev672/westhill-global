import "./Policyholder.css";
import Video from "../Video";
import Acoordian from "../Acoordian";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Policyholder = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      offset: 300
    })
  },[])
  return (
    <>
      <Video
        stext="POLICYHOLDER"
        ptext="Enjoy a simple, free, and fully digital experience that makes home repairs easier."
      />

      {/*------------------------ After video 1st div----------------------- */}
      <div className="container-fluid py-0 ">
        <h1 className="text-center first-heading" data-aos="fade-down">
          Sometimes the fastest way home all
        </h1>
        <h2 className="text-center first-heading" data-aos="fade-up">
          begins with just a few clicks.
        </h2>
      </div>
      <div className="container-fluid px-0 bg-color ">
        <div className="container my-4 ">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6  py-5 b ">
              <p className="number mx-auto">1</p>
              <h4 className=" first-div-card-heading text-center" data-aos="fade-up">Lorem</h4>
              <h5 className="text-center mb-5 py-sm-3" data-aos="fade-up">
                FIND A HIGHLY-VETTED, QUALIFIED CONTRACTOR
              </h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6  border border-top-0 border-bottom-0  py-5 ">
              <p className="number mx-auto">2</p>
              <h4 className=" first-div-card-heading text-center" data-aos="fade-up">
                Lorem ipsum dolor
              </h4>
              <h5 className="text-center mb-5 py-sm-3" data-aos="fade-up">
                GET A FAIR ESTIMATE WITH QUALITY REVIEW
              </h5>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6  py-5 ">
              <p className="number mx-auto">3</p>
              <h4 className=" first-div-card-heading text-center" data-aos="fade-up">
                Lorem ipsum dolor amet
              </h4>
              <h5 className="text-center py-sm-3 mb-5 " data-aos="fade-up">
                TRACK EVERY STEP OF THE PROJECT IN REAL-TIME
              </h5>
            </div>
          </div>
        </div>
      </div>

      {/*------------------------ After video 2nd div----------------------- */}
      <div className="container-fluid bg-color py-0">
        <div className="container ">
          <h1 className="my-3 text-heading">
            WESTHILL EMPOWERS PROPERTY OWNERS.
          </h1>
          <p className="para" data-aos="fade-right">
            Anyone who has ever suffered damage to their home resulting in an
            insurance claim understands how stressful and time consuming the
            process of restoring their home back to “normal” can be. If you are
            going through this experience for the first time, you may be unsure
            or even confused about how that process works, what the proper steps
            are, or how long those steps should take.
          </p>
          <p className="para" data-aos="fade-right">
            Born out of our founder’s frustration with a property claim of his
            own, Westhill Global exists for the purpose of helping homeowners
            that find themselves in this situation access the tools and
            resources they need to better navigate this process to get their
            homes, and their lives, back to normal.
          </p>
          <p className="para" data-aos="fade-up">
            Today, many of the top insurance carriers in the U.S. partner with
            Westhill to offer their policyholders access to the industry's
            leading fully-digital managed repair platform and premier contractor
            network, all at no cost to the homeowner.
          </p>
        </div>
      </div>
      {/*------------------------ After video 3rd div----------------------- */}
      <div className="container-fluid px-0 py-5 third-div">
        <div className="container  mx-lg-3">
          <h2>WHAT PROPERTY OWNERS CAN EXPECT:</h2>
          <p data-aos="fade-right">
            When utilizing the Westhill platform, homeowners can enjoy a simple,
            free, and fully digital experience that will make home repairs
            easier,and assist them down the “happy path to normal”
          </p>
        </div>
        {/* ------------------acordian--------- */}
        <div className="container">
          <Acoordian heading="A FULLY-DIGITAL EXPERIENCE" />
          <Acoordian heading="ACCESS TO VETTED, QUALIFIED CONTRACTORS" />
          <Acoordian heading="ZERO COST TO POLICYHOLDER" />
          <Acoordian heading="A 5-YEAR WORKMANSHIP WARRANTY" />
          <Acoordian heading="ACCESS TO CUSTOMER EXPERIENCE SPECIALISTS" />
        </div>
      </div>
    </>
  );
};

export default Policyholder;
