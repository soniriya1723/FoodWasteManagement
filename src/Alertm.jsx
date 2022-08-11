import React from 'react'
import wed from "../src/images/td3.png";
import {Link} from "react-router-dom";


   const Alertm = () => {
  return (
    <>
        <div className='container'>
        <figure>
            <img src={wed} className= 'alertm' alt="contactAlertImg"/>
          </figure>
          <Link to='/'><button className='btn-alert'>Home</button></Link>
        </div>
    </>
  )
}

export default Alertm