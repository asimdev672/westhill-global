import React from "react";
import "./Carriers.css";
import Video from "./Video";
import CarrierAcoordian from "./CarrierAcoordian";
import CarrierCard from "./CarrierCard";

const Carriers = () => {
  return (
    <>
      <Video
        stext="CARRIERS"
        ptext="Learn how Westhill has reimagined and built a better customer experience for policyholders."
      />
      {/*------------------------ 1ST DIV--------------------- */}
      <div className="container-fluid">
        <div className="container">
          <h1 className="heading py-lg-4">Why Managed Repair?</h1>
          <p className="para">
            Industry data shows that when insurers miss the mark on how claims
            are handled, both customer satisfaction and retention suffer: -85
            points satisfaction on survey scores & 83% switch or plan to switch
            (JD Power 2021).
          </p>

          <div className="container">
            <h3 className="heading ">
              Cash Settlement is not a world class customer experience
            </h3>

            <p className="para">
              According to J.D. Power, the 2nd highest negative factor cited in
              a claims experience is a "high level of effort to resolve".
              However, in a cash settlement model, consumers are asked to do
              just that after receiving their check.
            </p>
            <h3 className="heading">
              Policyholders value concierge-style services such as managed
              repair
            </h3>
            <p className="para">
              Offering services such as managed repair as an alternative to cash
              settlement models has demonstrated a significant increase in
              customer satisfaction, resulting in survey score increases between
              33-44 points.
            </p>
          </div>
          <p className="para">
            Continually creating a better policyholder experience is perhaps the
            most crucial factor in competing for customer satisfaction,
            retention, and growth. By offering a managed repair solution to
            policyholders, carriers can truly make a difference in their overall
            experience.
          </p>
        </div>
      </div>
      {/*------------------------ 2nd DIV--------------------- */}
      <div className="container-fluid second-div">
        <div className="container">
          <h1 className="my-lg-5 pt-lg-5 pt-3">WHY WESTHILL?</h1>
          <p>
            Now more than ever, policyholders, and consumers in general, highly
            value digital capabilities and interactions. According to a recent
            study by Medallia, 60% of customers expect to have real-time,
            digital communication with their P&C providers. Overall,
            satisfaction scores among such customers is 33 points higher vs.
            customers who did not use digital tools in the claims process (JD
            Power 2022).
          </p>
          <p>
            Now more than ever, policyholders, and consumers in general, highly
            value digital capabilities and interactions. According to a recent
            study by Medallia, 60% of customers expect to have real-time,
            digital communication with their P&C providers. Overall,
            satisfaction scores among such customers is 33 points higher vs.
            customers who did not use digital tools in the claims process (JD
            Power 2022). Westhill is the first and leading fully-digital managed
            repair solution connecting policyholders, insurance carriers, and
            contractors in one seamless experience. From contractor selection to
            estimate approval to repair completion, Westhill's digital solution
            saves property owners time while delivering trust and transparency.
            In addition to our unique digital experience, the Westhill MRP
            solution is set apart from our competitors in a number of ways.
          </p>
        </div>
        <div className="container-fluid px-0">
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
          </div>
        </div>
      </div>
      {/*------------------------ 3rd DIV--------------------- */}
      <div className="container-fluid thrd-div">
        <h1 className="py-lg-5">POWERFUL RESULTS FOR YOUR BUSINESS</h1>
        <p className="para">
          Insurance carriers looking to create an improved and more
          cost-effective customer experience can realize increased customer
          satisfaction, decreased LAE, faster cycle times & controlled indemnity
          spend by implementing a digital MRP program.
        </p>
         {/*------------------------ 3rd DIV card--------------------- */}
         <div className="container-fluid mt-lg-5">
         <div className="row mt-lg-5"  >
         <CarrierCard
             img='img/thumb.PNG'
             heading='+10 POINT NPS INCREASE'
             text='Insurance carriers reported a 10-point increase in NPS scores by simply implementing the Westhill Managed Repair Solution.'
         />
         <CarrierCard
             img='img/multiply.PNG'
             heading='$400 AVERAGE LAE SAVINGS'
             text='Carriers utilizing MRP Contractor-first model to inspect and receive an estimate integrated with desk adjusting save an average of $400 per claim on LAE.'
         />
         <CarrierCard
             img='img/weight.PNG'
             heading='FASTER CYCLE TIMES'
             text='In one case study, Westhill significantly lowered the timeline from FNOL to completed repair, by 60% by leveraging our process & technology.'
         />
         <CarrierCard
             img='img/path.PNG'
             heading='AN AVERAGE OF 14% SAVINGS ON REPAIR COST'
             text='In another case study, a partner carrier saw an average of 14% savings on repair costs vs. the prior year utilizing the Westhill model.'
         />
         <CarrierCard
             img='img/bettery.PNG'
             heading='8% MORE ACCURATE ESTIMATES'
             text='Carriers adopting Westhills best practice, third-party estimate QA review process have recognized an improved market accuracy of 8%.'
         />
         <CarrierCard
             img='img/d-arrow.PNG'
             heading='68% LESS SUPPLEMENTS'
             text='Utilizing Westhill’s workflow and communication processes carriers have seen a decrease in supplements, with no supplements reported on  68% of referred claims'
         />
              </div>
         </div>
      </div>
      <div className="container last-div">
          <h1 className="text-center mt-lg-5 mt-3">FIND OUT HOW WESTHILL CAN SEAMLESSLY INTEGRATE<br /> TO YOUR WORKFLOW</h1>
           <p className="text-center mt-lg-4 mt-3">Book a free analysis & workflow mapping session.</p>
           <div className="d-flex justify-content-center">
                   <button className=" btn-card mt-lg-4">CONTACT US</button>
           </div>
            
        </div>
    </>
  );
};

export default Carriers;
