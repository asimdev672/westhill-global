import { Link } from "react-router-dom";
import React, { useState } from 'react'
import './Navbar.css';
const Navbar = () => {
  const[navbar,setNavbar]=useState(false)

const changebg=()=>{
  console.log(window.scrollY);
  if(window.scrollY>=15){
    setNavbar(true)
  }else{
    setNavbar(false)
  }
}
window.addEventListener('scroll',changebg)
  return (
    <>
      <nav className={navbar ? 'navbar active-bg navbar-expand-lg  py-lg-3 navbar-bg' : 'navbar  navbar-expand-lg  py-lg-3 navbar-bg'}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="#">
        <img src="img/logo.png " className=' mx-lg-3 px-lg-3 me-auto logo' alt="" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-2 mb-lg-0 navbar-items-a">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/policyholder">POLICYHOLDER</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/carriers">CARRIERS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">CONTRACTOR</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">PROPERTEYRENOVATION</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link " to="#">PLATFORM</Link>
          
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT US
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">CARRERS</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown  ">
          <Link className="nav-link dropdown-toggle showw-item " to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LOGIN
          </Link>
         
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="#">ELSO</Link></li>
            <li><Link className="dropdown-item" to="#">CONTRACTOR</Link></li>
            <li><Link className="dropdown-item" to="#">CARRIER</Link></li>
          </ul>
        </li>
        
      </ul>
    </div>
    
  </div>
</nav>
    </>
  )
}

export default Navbar
