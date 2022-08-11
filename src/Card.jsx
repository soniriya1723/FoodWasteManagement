import React from 'react'
// import {NavLink} from "react-router-dom";
import {NavLink} from "react-router-dom";

import web from "../src/images/b3.webp";
import wer from "../src/images/c1.jpg";
import wes from "../src/images/s4.webp";
import wen from "../src/images/bo1.jpg";
import wem from "../src/images/p1.jpg";
import wet from "../src/images/t1.jpg";


const Campaign = () =>{
  return (
      <>
      
      <div className="my-5">
        <h1 className="text-center"> Our Campaign</h1>
        <h3 className="text-center">What a privilege to be here on the planet to contribute your unique donation <br/> to humankind.Each face in the rainbow of colors that populate our world is<br/> precious and special.</h3>
        <h4 className='text-center'>"No one has ever become poor from giving"  </h4>

        <NavLink to="/bag"><button className="btn-g">Be a Giver</button></NavLink>
                
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
            <div className='col-md-4 col-10 mx-auto'>
   
            <div class="card">
  <img src={web} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Donate a blanket, save a life</h5>
    <p class="card-text">Your donations can save a child’s life, can protect a woman’s dignity and make a huge difference in the lives of people. <b>Giver</b> distribute blankets and provide food to the homeless. Be a <b>Giver</b> to help the homeless. Winter is already here. Your simple kind gesture can save a life. Donate NOW and spread WARMTH.
</p>
  <NavLink to = "/bag">
  <button className='btn-donate'>DONATE NOW</button></NavLink>
  </div>
</div>
  </div>



  <div className='col-md-4 col-10 mx-auto'>
   
   <div class="card">
<img src={wer} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Donate Old Clothes</h5>
<p class="card-text">You must have plenty clothes and do not even realize that we have a heap of clothes we do not wear anymore. So, go through your closet and separate out the clothes which don’t fit you anymore, Give them away to people who will be able to use them. Old blazers, and school uniforms can be given away but just make sure that the clothes are in decent condition.</p>
<NavLink to = "/bag">
  <button className='btn-donate'>DONATE NOW</button></NavLink>
</div>
</div>



   </div>


   <div className='col-md-4 col-10 mx-auto'>
   
   <div class="card">
<img src={wes} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Donate Shoe</h5>
<p class="card-text">When thinking of donating stuff, pick things that can actually be useful, like footwear. Shoes with loose soles or slippers which are slightly damaged can be donated to under privileged kids. Most of our damaged shoes can be easily repaired by the cobbler and so they can be used for a long time.</p>
<NavLink to = "/bag">
  <button className='btn-donate'>DONATE NOW</button></NavLink>
</div>
</div>



   </div>


   <div className='col-md-4 col-10 mx-auto'>
   
   <div class="card">
<img src={wen} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">Donate Books</h5>
<p class="card-text">Most underprivileged children are unable to afford education. Story books will help them to make a start. There would be no point in giving them books related to academics as they might not know the basics. Books from your previous classes can be donated to children of your servants as they may be able to use them and they will not have to buy new books.</p>
<NavLink to = "/bag">
  <button className='btn-donate'>DONATE NOW</button></NavLink>
</div>
</div>



   </div>


   <div className='col-md-4 col-10 mx-auto'>
   
   <div class="card">
<img src={wem} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">DONATE SANITARY NAPKINS</h5>
<p class="card-text">Women belonging to the weaker sections of the society often do not have access to basic sanitation.  They are unable to afford basic items required to maintain personal hygiene which can lead to infections and discomfort. Sanitary napkins are a thoughtful donation to make and will help these women to be more comfortable during the monthly menstrual cycle.</p>
<NavLink to = "/bag">
  <button className='btn-donate'>DONATE NOW</button></NavLink>
</div>
</div>



   </div>


   <div className='col-md-4 col-10 mx-auto'>
   
   <div class="card">
<img src={wet} class="card-img-top" alt="..."/>
<div class="card-body">
<h5 class="card-title">DONATE TOYS</h5>
<p class="card-text">Have you ever noticed how some children who may not have as many things as you do, tend to find joy in little things? You can gather your old toys and make a difference in the life of a child. They may even value it much more than you did. An act of kindness never goes waste and nothing is more beautiful than an innocent smile of a kid.</p>
<NavLink to = "/bag">
  <button className='btn-donate'>DONATE NOW</button></NavLink>
</div>
</div>



   </div>


            </div>
          </div>
        </div>
      </div>
      


     


    </>
  );
};

export default Campaign