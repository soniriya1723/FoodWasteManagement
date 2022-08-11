import React from 'react';
import { NavLink } from "react-router-dom";

import web from "../src/images/m2.jpg";
import Campaign from './Card';
import Footer from './Footer';
import About from './About';
import Volunteer from './Volunteer';
import Contact from './Contact';





const Home = () =>{
  return (
     <>
    <section id="header" className='d-flex align-items-center'>
    <div className='container-fluid nav_bg'>
    <div className='row'>
        <div className='col-10 mx-auto'>
        <div className='row'>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1> "Throwing away food is like stealing from the table of those who are poor and hungry" </h1>
                <h3 className="my-3">
                Your generous donation is highly appreciated and will help people around the world.
                Through the power of giving, we make the world a better place. Join today in our effort to make someone feel blessed today.


                </h3>
                <div className="mt-3">
                <NavLink to="/donatefood" className="btn-get-started">
                    Donate Now
                </NavLink>

</div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={ web } className = "img-fluid animated" alt="home img" />
            </div>
        </div>
        </div>
        </div>
    </div>
    </section>
      <Campaign/>
      <About/>
      <Volunteer/>
      <Contact/>
      <Footer/>
    
    </>
  );
};

export default Home