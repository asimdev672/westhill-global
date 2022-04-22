import React from 'react'
import './PropertyEnovation.css'
import Video from '../Video'
import CarrierCard from '../CarrierCard'
const PropertyEnovation = () => {
  return (
    <>
       <Video
        stext="PROPERTY RENOVATION"
        ptext="Services designed for institutional customers."
      />
        <div className="container-fluid">
        <div className="container">
        <p className="para">Westhill empowers at-scale institutional owners to make efficient and effective repair decisions.</p>
          <p className="para">
          One solution, many benefits: find highly-qualified, vetted contractors around the nation to meet your market needs, facilitate project coordination, and receive insightful analytics. Westhill is the concierge-level platform that solves your property renovation needs.
          </p>
        </div>
      </div>
       {/*------------------------ card--------------------- */}
       
       <div className="container-fluid property-inovation-card">
       <h1 className="py-lg-5">POWERFUL RESULTS FOR YOUR BUSINESS</h1>
        <p className="paras pb-lg-5">
          Insurance carriers looking to create an improved and more
          cost-effective customer experience can realize increased customer
          satisfaction, decreased LAE, faster cycle times & controlled indemnity
          spend by implementing a digital MRP program.
        </p>
          <div className="row">
          <div className='col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card '>
         <CarrierCard
             heading='CONCIERGE-STYLE DIGITAL EXPERIENCE'
             text='Tell us about your company, scope of services, and local area so that we can best match you with projects.'
         />
         </div>
          <div className='col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card '>
         <CarrierCard
             heading='DIFFERENTIATED CONTRACTOR NETWORK '
             text='Thats right! Westhill works closely with insurance carriers and institutions to provide only high-quality jobs. '
         />
         </div>
          <div className='col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card '>
         <CarrierCard
             heading='5-YEAR WORKMANSHIP WARRANTY'
             text='Thats right! Westhill works closely with insurance carriers and institutions to provide only high-quality jobs. '
         />
         </div>
          </div>
      </div>
                        {/* last div */}
                        <div className="container last-div">
          <h1 className="text-center mt-lg-5 mt-3">INTERESTED IN HOW WESTHILL CAN <br /> PARTNER WITH YOU?</h1>
           <div className="d-flex justify-content-center">
                   <button className=" btn-card mt-lg-4">CONTACT US</button>
           </div>
            
        </div>
    </>
  )
}

export default PropertyEnovation
