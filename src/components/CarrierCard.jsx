import React from 'react'
import './CarrierCard.css'
const CarrierCard = (props) => {
  return (
    <>
                  <img src={props.img} alt="" />
                  <h4 className="text-center carrier-card-h py-3">{props.heading}</h4>
                      <p className='text-center mb-5 py-sm-3 '>{props.text}</p>
                
      {/* <div className='col-lg-4 col-md-4 col-sm-6  py-5 border carrier-card '>
                  <img src={props.img} alt="" />
                  <h4 className="text-center carrier-card-h py-3">{props.heading}</h4>
                      <p className='text-center mb-5 py-sm-3 '>{props.text}</p>
                  </div> */}
    </>
  )
}

export default CarrierCard
