

import React from 'react'
 import web from "../src/images/books.jpg";
 import web2 from "../src/images/bla.jpg";
 import wec from "../src/images/clo1n.jpg";
 import wep from "../src/images/ch.jpg";
 import wes from "../src/images/shoe.jpg";
 import wet from "../src/images/t2.jpg";
 import {Link} from "react-router-dom";

const Donate = ()  => {
  const [username, setUsername] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [state, setState] = React.useState('');
  const [quantity, setQuantity] = React.useState('');
  const [charity, setCharity] = React.useState('');

  const [error, setError] = React.useState(false);
  
  
  const donate = async () => {

    console.warn(!username);
     if(!username || !mobile || !email || !address || !charity || !state || !quantity)
     {
       setError(true)
     return false;

     }

    console.warn(username, mobile, email, address, charity ,state, quantity);
    const userId = JSON.parse(localStorage.getItem('user'));
    let result = await fetch("http://localhost:5000/mixdonate",{
      method: 'post',
      body: JSON.stringify({username, mobile, email, address, charity, quantity, state, userId}),
      headers: {
        "Content-Type": "application/json"
      }
    });

    result = await result.json();
    console.warn(result);
    // localStorage.setItem("user", JSON.stringify(result))
    // navigate('/')

    
  }
  return (
      <>



{/* <div className ="container-fluid main_header">
    <div className="row">
        <div className="col-md-10 col-12 mx-auto">
            <div className="row"> */}
          <section className='contactus-section'>
<div className='container'>
  <div className='row'>
    <div className='col-14 col-lg-10 mx-1'>
      <div className='row'>
        <div className="col-14 col-lg-5">
          <h1 className='donate-h1 fw-bold'>
    BE A GIVER
          </h1>

          <h4 className="text-center-donate">"No one has ever become poor from giving" </h4>
          
           {/* <figure>
            <img src={wec} alt="blanketImg" className='img-fluid'/>
          </figure>  */}





          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src = {web} class="dd-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={web2} class="dd-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={wec} class="dd-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={wep} class="dd-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={wes} class="dd-block" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={wet} class="dd-block" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>










      
        </div>
    

        {/* Right side of contact form */}

        <div className='contact-rightside col-12 col-lg-7'>
        
         
          <div className='row'>
            <div className='col-12 col-lg-6 donate-input-field'>
              <input
               type="text" 
               name='username'
               id='username'
               required
               autoComplete="off"
               className='form-control'

               placeholder='Enter your full name'
               value={username}
               onChange = {(e)=>{setUsername(e.target.value)}}
               />
             
             {error && !username && <span className='error'>Enter valid name </span>}
             </div>

            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="number" 
               name='mobile'
               id='mobile'
               className='form-control'
               placeholder='Enter your mobile no.'
               value={mobile}
               onChange = {(e) =>{setMobile(e.target.value)}}
               />
                            {error && !mobile && <span className='error'>Enter valid mobile number </span>}

            </div>
           </div>

           <div className='row'>
            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="text" 
               name='email'
               id='email'
               className='form-control'
               placeholder='Enter your email'
               value={email}
               onChange = {(e) =>{setEmail(e.target.value)}}
               />
               {error && !email && <span className='error'>Enter valid emaid</span>}

            </div>
   
            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="text" 
               name='state'
               id='state'
               className= 'form-control'
               placeholder='Enter your state'
               value={state}
               onChange = {(e) =>{setState(e.target.value)}}
               />
                            {error && !state && <span className='error'>Enter valid state name </span>}

            </div>
            </div>
           

            <div className='row'>
            <div className='col-12  contact-input-field'>
              <input
               type="text" 
               name='Address'
               id='Address'
               className='form-control'
               placeholder='Enter your full address'
               value={address}
               onChange = {(e) =>{setAddress(e.target.value)}}
               />
                            {error && !username && <span className='error'>Enter valid Address </span>}

            </div>
               </div>

               <div className='row'>
            <div className='col-12 contact-input-field'>
            <div className='row'>
            <div className='col-12  contact-input-field'>
              <input
               type="text" 
               name='charity'
               id='charity'
               className='form-control'
               placeholder='What you want to donate?'
               value={charity}
               onChange = {(e) =>{setCharity(e.target.value)}}
               />
                            {error && !charity && <span className='error'>Enter valid thing </span>}

            </div>
               </div>

              

               <div className='row'>
            <div className='col-12 contact-input-field'>
              <input
               type="text" 
               name='quantity'
               id='quantity'
               className='form-control'
               placeholder='Enter the quantity of thing you wish to donate'
               value={quantity}
               onChange = {(e) =>{setQuantity(e.target.value)}}
               />
                            {error && !quantity && <span className='error'>Enter valid name </span>}

            </div>


    </div>

        {/* <div className="contact-rightside"> */}
           

{/*           



          {/* <div className='row'>
            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="number" 
               name='phone'
               id=''
               className='form-control'

               placeholder='Phone Number'
               value={userData.phone}
               onChange = {postUserData}
               />
            </div>

            <div className='col-12 col-lg-6 contact-input-field'>
              <input
               type="email" 
               name='email'
               id=''
               
               autoComplete="off"
               className='form-control'
               placeholder='Email ID'
               value={userData.email}
               onChange = {postUserData}
               />
            </div>

          </div>
          
          
         <div className='row'>
            <div className='col-12 contact-input-field'>
              <input type="text" name='address' id='' className='form-control'
               placeholder='Add Address'
               value={userData.address}
               onChange = {postUserData} />

            </div>
          </div>


          <div className='row'>
            <div className='col-12'>
              <input type="text" name='message' id='' className='form-control' 
              placeholder='Enter Your Message'
              value={userData.message}
               onChange = {postUserData} />

            </div>
          </div> */} 

          <div class="form-check form-checkbox-style ">
<input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
<label class="form-check-label" className='main-hero-para'>

I agree that the Giver may contact me at the email address or phone number mentioned above
</label>
</div>
<Link to = '/alertm'>
<button onClick={donate} type = 'submit' className='btn-submit contact-input-field'>SUBMIT</button>
</Link>

         
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
  
        </section>
        
        
       
    
    
  </>
   
  );
}

export default Donate