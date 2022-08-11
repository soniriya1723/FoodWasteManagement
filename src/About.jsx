import React from 'react';
import web from "../src/images/m3.jpg";
import wed from "../src/images/m1.jpg";
import wem from "../src/images/m4.jpg";
import wes from "../src/images/f22.jpg";

// import wen from "../src/images/f12.jpg";
// import {NavLink} from "react-router-dom";




const About = () =>{
  return (
      <>

<div className ="container-fluid main_header">
    <div className="row">
        <div className="col-md-10 col-12 mx-auto">
            <div className="row">
                {/* <!-- left side div --> */}

                <div className = "col-md-6 col-12 main_header_left">
                  <h1>Who we are?</h1>
                  <p>Giver is a dedicated towards making India hunger free, we are moving one step closer to our goal every day. Together we believe we can ensure to food daily. <span className ="text_clr"> Giver </span> was founded in 2022 by Riya Soni. Our mission is to create a world when people have all the basic necessities by today’s global standards. It’s our responsibility to make a better environment, provide education & solve health issues in any way we can.</p>
                  <a href="/donatefood"><button> DONATE NOW </button></a>
            </div>
{/* <!-- right side div --> */}
<div className="col-md-6 col-12 main_header_right">
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={web} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={wed} className="d-block" alt="..."/>
    </div>
   
    <div className="carousel-item">
    <img src={wes} className="d-block" alt="..."/>
    </div>
    <div className="carousel-item">
    <img src={wem} className="d-block" alt="..."/>
    </div>
   
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div></div>
    </div>
    </div>
    <div className="back">
    <h1 className="wws">Why We Started Giver?</h1>
    <div className='wvsp'>
    <p className="wvsp"> With the help of our NGOs, kitchens and donors, we are moving one step closer to our goal every day. Together, we believe, we can ensure everyone has access to food daily. Feeding India was founded in 2014 by Ankit Kawatra and Srishti Jain, and in January 2019 merged with Zomato to accelerate its progress towards solving hunger in India.<br/><br/> Non-Profit OrganizationOur vision is to create a world where people have all the basic necessities by today’s global standards. It’s our responsibility to make a better environment, provide education and solve health issues in any way we can. Feeding India, a non-profit by Zomato, is dedicated towards making India hunger-free. With the help of our NGOs, kitchens and donors, we are moving one step closer to our goal every day.  Together, we believe, we can ensure everyone has access to food daily.<br/><br/> Feeding India was founded in 2014 by Ankit Kawatra and Srishti Jain, and in January 2019 merged with Zomato to accelerate its progress towards solving hunger in India. Non-Profit OrganizationOur vision is to create a world where people have all the basic necessities by today’s global standards. It’s our responsibility to make a better environment, provide education and solve health issues in any way we can.</p>
    </div>
    </div>
   


 {/* Second part######################## */}
 
 <div className='second'>
   <h1>Our Mission</h1>
 </div>
 

 <div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      We believe contributing to society is a long-term solution to making a beautiful future.
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
     <p>Our vision is to create a world where people have all the basic necessities by today’s global standards. It’s our responsibility to make a better environment, provide education and solve health issues in any way we can.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      The pathway to a great way is educating the youth of today through educational campaigns.
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
     <p> Our vision is to create a world where people have all the basic necessities by today’s global standards. It’s our responsibility to make a better environment, provide education and solve health issues in any way we can.</p>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      No one deserves to live without basic necessities and that’s true across all borders.
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      <p> Our vision is to create a world where people have all the basic necessities by today’s global standards. It’s our responsibility to make a better environment, provide education and solve health issues in any way we can.</p>
      </div>
    </div>
  </div>
</div>



{/* Volunteers card */}



    </>
  );
};
export default About