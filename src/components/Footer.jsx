import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid py-0 my-0 footers">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 pt-5">
              <img src="img/logoA.png" alt="img/logoA.png" />
            </div>
            <div className="col-lg-8 my-5">
              <p>Contact Us:</p>
              <strong>Email Us:</strong>{" "}
              <a className="footer-email-link" href="">
                asim152038@gmail.com
              </a>
              <p className="my-3">
                <span className="py-4">17 miles | </span>{" "}
                <span className="py-4">Two Ballpark Center</span>
                <br />
                <span className="py-4">Suite 100 | </span>{" "}
                <span className="py-4">Ali-pur frash town</span>
              </p>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="copyright">© All rights reserved Term of use |</p>
          <div className="footer-link">
            <ul className="d-flex flex-wrap my-0">
              <li>
                <a href=""> About us |</a>
              </li>
              <li>
                <a href="">Carrier |</a>
              </li>
              <li>
                <a href="">Contract |</a>
              </li>
              <li>
                <a href="">Platform |</a>
              </li>
              <li>
                <a href="">Privacy policy |</a>
              </li>
              <li>
                <a href="">Legeal |</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
