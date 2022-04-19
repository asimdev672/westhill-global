import React from 'react'
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  py-lg-3 navbar-bg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="img/logo.png " className=' mx-lg-3 px-lg-3 me-auto logo' alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto  mb-2 mb-lg-0 navbar-items-a">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">POLICYHOLDER</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CARRIERS</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">CONTRACTOR</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">PROPERTEYRENOVATION</a>
        </li>
        <li className="nav-item ">
          <a className="nav-link " href="#">PLATFORM</a>
          
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            ABOUT US
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">CARRERS</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown  ">
          <a className="nav-link dropdown-toggle showw-item " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LOGIN
          </a>
         
          <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">ELSO</a></li>
            <li><a className="dropdown-item" href="#">CONTRACTOR</a></li>
            <li><a className="dropdown-item" href="#">CARRIER</a></li>
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
