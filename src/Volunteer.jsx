import React from 'react'
import vol1 from "../src/images/s.png";
import vol2 from "../src/images/mon.png";
import vol3 from "../src/images/G.png";
import { NavLink } from 'react-router-dom';


const Volunteer = () =>{
  return (
      <>
      <div className='Vol'>
  <h1>Our Extraordinary Volunteers</h1>
  <p>Delivering happiness to the world- made possible by our amazing team members. <br/>Our volunteer team consists of thousands of people working endlessly for our campaigns.</p>
</div>

   
<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={vol1} className="vd-block"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src={vol2} className="vd-block"  alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
    <div className="carousel-item">
      <img src={vol3} className="vd-block" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<NavLink to= "/join">
<button className="join">JOIN NOW</button></NavLink>



  
      

    </>
  );
};

export default Volunteer