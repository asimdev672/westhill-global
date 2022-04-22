import React from "react";
import "./Lgnavbar.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-none d-lg-block py-0 navbar-bg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="img/westhill_logo.png "
              className=" mx-lg-3 px-lg-3 logo"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 navbar-items-a">
              <li className="nav-item">
                <a className="nav-link active " aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  POLICYHOLDER
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CARRIERS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  CONTRACTOR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PROPERTEYRENOVATION
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link " href="#">
                  PLATFORM
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  ABOUT US
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      CARRERS
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown d-lg-none ">
                <a
                  className="nav-link dropdown-toggle showw-item "
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  LOGIN
                </a>
              </li>
            </ul>
            <li className="showw-item d-none d-lg-block">LOGIN</li>
            <div className=" container hide ">
              <ul className="">
                <li>
                  <a className="" href="#">
                    ELSO
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    CONTRACTOR
                  </a>
                </li>
                <li>
                  <a className="" href="#">
                    CARRIER
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
