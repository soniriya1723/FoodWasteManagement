import React from "react";
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
       
        <div className="container-fluid" nav_bg>
            <div className="row">
                <div className="col-10 mx-auto">

                
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">
    Giver
    </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mt-3 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active"
          
          exact
           className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="menu_active"
        exact

       className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="menu_active"
        exact

 className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="menu_active"
        exact

 className="nav-link" to="/campaign">Campaign</NavLink>
        </li>
        <li className="nav-item">
        <NavLink activeClassName="menu_active"
        exact

 className="nav-link" to="/volunteer">Volunteer</NavLink>
        </li>
        
         <li className="nav-item">
         <NavLink activeClassName="menu_active"
         exact
         
 className="nav-link" to="/bag">Be a Giver</NavLink> 
         </li> 

        </ul>
        <NavLink to="/donatefood"><button className="joinn"> DONATE FOOD </button></NavLink>
  </div>
  </div>
</nav>
</div>
            </div>
        </div> 
        
        </>
    );
};

export default Navbar