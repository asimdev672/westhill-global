import React from 'react'
import './SectionB.css'
const SectionB = () => {
  return (
    <>
    <div className="container-fluid bg-color">
    <div className="container">
      <p className='para'>Let's face it: the current home repair process is difficult.</p>
      <p className='para'>Unfortunately, homeowners often have to give up valuable time and become project managers to ensure that repairs get completed - countless research hours to find a reputable contractor, deciphering scope of work, trying to track every bit of new information, and ultimately ensuring that they are not being taken advantage of.</p>
      <p className='para'>We believe that there is a better way. Westhill exists to improve and streamline the repair process for homeowners. By leveraging technology, Westhill helps homeowners:</p>
    </div>
    </div>
      {/*------------- 1st div-------------------------- */}
      <div className="container-fluid px-0 ">
          <div className="container my-4">
        
              <div className="row">
                  <div className='col-lg-4 col-md-4 col-sm-6  py-5 b '>
                  <img src="img/location.png" className='my-lg-2' alt="" />
                      <h5 className='text-center mb-5 py-sm-3'>FIND A HIGHLY-VETTED, QUALIFIED CONTRACTOR</h5>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-6  border border-top-0 border-bottom-0  py-5 ' >
                  <img src="img/location.png" className='my-lg-2 text-lg-center mx-auto' alt="" />
                      <h5 className='text-center mb-5 py-sm-3'>GET A FAIR ESTIMATE WITH QUALITY REVIEW</h5>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-6  py-5 '>
                  <img src="img/location.png" className='my-lg-2' alt="" />
                      <h5 className='text-center py-sm-3 mb-5 '>TRACK EVERY STEP OF THE PROJECT IN REAL-TIME</h5>
                  </div>
              </div>
          </div>
          <div className='center-div'>
            <h4 className='fw-bold mt-5 py-lg-4 text-center mb-0 '>
            Westhill is the first, and leading fully-digital managed repair solution connecting  insurance carriers, homeowners, and highly-qualified reputable contractors.
            </h4>
          </div>
      </div>
            {/*------------- 2nd div-------------------------- */}
            <div className="container-fluid second-card-div">
          <div className="container my-4">
        
              <div className="row">
              <div className='col-lg-4 col-md-4 col-sm-6  py-5  '>
                  <h3 className='text-center'>POLICYHOLDERS</h3>
                      <p className='text-center mb-5 py-sm-3 px-3'>Insurance Carriers have a unique opportunity to make the home repair process for policyholders a remarkable experience.</p>
                  </div>
                  <div className='col-lg-4 col-md-4 col-sm-6  border border-top-0 border-bottom-0  py-5 ' >
                  <h3 className='text-center'>CARRIERS</h3>
                      <p className='text-center mb-5 py-sm-3 px-3'>Homeowners enjoy a faster, easier customer experience during the process of repairing their homes. It's what we refer to as the “happy path to normal”.</p>
                  </div>
                  
                  <div className='col-lg-4 col-md-4 col-sm-6  py-5 '>
                  <h3 className='text-center'>CONTRACTORS</h3>
                      <p className='text-center py-sm-3 px-3 mb-5 '>Contractors benefit by growing their business by leveraging technology to tap into a source of quality, profitable jobs with a high-close rate. </p>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default SectionB
