import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
     
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2> Join Us </h2>
                  <ul>
                    <li>
                      <NavLink to="#">Donate Now</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Become a volunteer </NavLink>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2> Contact Info </h2>
                  <ul>
                    <li>
                      <h6>Ph. +91-846-887-4622</h6>
                    </li>

                    <li>
                    <h5>
                      <NavLink to="#"> soniriya761@gmail.com</NavLink>
                      </h5>
                    </li>
                  </ul>
                </div>

                <div className="col-6 col-lg-3">
                  <h2> Important Links </h2>
                  <ul>
                    <li>
                    <h4>
                      <NavLink to="/about">About</NavLink>
                      </h4>
                    </li>
                    <li>
                    <h4>
                      <NavLink to="/campaign">Campaign</NavLink>
                      </h4>
                    </li>
                    <li>
                    <h4>
                      <NavLink to="/donate">Donate Now</NavLink>
                    </h4>
                    </li>
                    <li>
                    <h4>
                      <NavLink to="/contact">Contact</NavLink>
                    </h4>
                    </li>
                    <li>
                    <h4>
                      <NavLink to="/volunteer">Volunteer</NavLink>
                      </h4>
                    </li>
                    <li>
                    <h4>
                      <NavLink to="/join">Join Now</NavLink>
                      </h4>
                    </li>
                  </ul>
                  
                  
                </div>

                <div className="col-6 col-lg-3">
                  <h2> Address </h2>
                  <ul>
                    <li>
                    <h3>
                      <NavLink to="">2424 Collins Avenue, Worthington, Ohio 43085
                      </NavLink>
                      </h3>

                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <hr />
            <div className="mt-3">
              <p className="main-hero-para text-center w-100">
                Copyright @ 2022 <a href="giver.com">giver.com</a> by RiyaSoni.
                All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer
