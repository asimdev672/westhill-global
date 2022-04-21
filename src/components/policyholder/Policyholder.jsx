import React from "react";
import "./Policyholder.css";
import Video from "../Video";
import Footer from '../Footer'
const Policyholder = () => {
  return (
    <>
      <Video
        stext="POLICYHOLDER"
        ptext="Enjoy a simple, free, and fully digital experience that makes home repairs easier."
      />
      <div className="container-fluid bg-color py-0">
        <div className="container ">
          <h1 className="my-3 text-heading">
            WESTHILL EMPOWERS PROPERTY OWNERS.
          </h1>
          <p className="para">
            Anyone who has ever suffered damage to their home resulting in an
            insurance claim understands how stressful and time consuming the
            process of restoring their home back to “normal” can be. If you are
            going through this experience for the first time, you may be unsure
            or even confused about how that process works, what the proper steps
            are, or how long those steps should take.
          </p>
          <p className="para">
            Born out of our founder’s frustration with a property claim of his
            own, Westhill Global exists for the purpose of helping homeowners
            that find themselves in this situation access the tools and
            resources they need to better navigate this process to get their
            homes, and their lives, back to normal.
          </p>
          <p className="para">
            Today, many of the top insurance carriers in the U.S. partner with
            Westhill to offer their policyholders access to the industry's
            leading fully-digital managed repair platform and premier contractor
            network, all at no cost to the homeowner.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Policyholder;
