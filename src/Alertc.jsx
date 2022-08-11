import React from 'react'
import wea from "../src/images/ty1.png";
import {Link} from "react-router-dom";


   const Alertc = () => {
  return (
    <>
        <div className='container'>
        <figure>
            <img src={wea} alt="contactAlertImg"/>
          </figure>
          <Link to='/'><button className='btn-alert'>Home</button></Link>
        </div>
    </>
  )
}

export default Alertc