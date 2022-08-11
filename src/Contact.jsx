import wec from "../src/images/f6.jpg";
import { NavLink } from "react-router-dom";

import React from "react";
const Donate = () => {
  const [firstname, setFirstname] = React.useState("");
  const [lastname, setLastname] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [msg, setMsg] = React.useState("");
  const [error, setError] = React.useState(false);

  const validate = () => {
    if (!firstname || !lastname || !mobile || !email || !address || !msg) {
      setError(true);
      return false;
    }
  };

  const checkValidation = () => {
    console.log('checkValidation');
   if (!validate()) {
     console.log('!validate');
     submit();
   }
   else {
     console.log('else');
    setError(true);
   }
  };

  const submit = async () => {
    console.log('its working!');
    console.warn(!firstname);
   

    console.warn(firstname, lastname, mobile, email, address, msg);
    const userId = JSON.parse(localStorage.getItem("user"));
    let result = await fetch("http://localhost:5000/contact", {
      method: "post",
      body: JSON.stringify({
        firstname,
        lastname,
        mobile,
        email,
        address,
        msg,
        userId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();
    console.log(result, 'resulttttttttresult');
    console.warn(result);
    // localStorage.setItem("user", JSON.stringify(result))
    // navigate('/')
  };
  return (
    <>
      <section className="contactus-section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contact-leftside col-12 col-lg-5">
                  <h1 className="donate-h1 fw-bold">CONTACT US</h1>
                  <figure>
                    <img src={wec} alt="contactImg" className="img-fluid" />
                  </figure>
                </div>

                {/* Right side of contact form */}

                <div className="contact-rightside col-12 col-lg-7">
                  <div className="row">
                    <div className="col-12 col-lg-6 donate-input-field">
                      <input
                        type="text"
                        name="firstname"
                        id="firstname"
                        required
                        autoComplete="off"
                        className="form-control"
                        placeholder="Enter your first name"
                        value={firstname}
                        onChange={(e) => {
                          setFirstname(e.target.value);
                        }}
                      />

                      {error && !firstname && (
                        <span className="error">Enter valid first name </span>
                      )}
                    </div>

                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        name="lastname"
                        id="lastname"
                        className="form-control"
                        placeholder="Enter your last name."
                        value={lastname}
                        onChange={(e) => {
                          setLastname(e.target.value);
                        }}
                      />
                      {error && !lastname && (
                        <span className="error">Enter valid last name </span>
                      )}
                    </div>
                  </div>

                  <div classname="row">
                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="number"
                        name="mobile"
                        id="mobile"
                        className="form-control"
                        placeholder="Enter your mobile no."
                        value={mobile}
                        onChange={(e) => {
                          setMobile(e.target.value);
                        }}
                      />
                      {error && !mobile && (
                        <span className="error">
                          Enter valid mobile number
                        </span>
                      )}
                    </div>

                    <div className="col-12 col-lg-6 contact-input-field">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                      {error && !email && (
                        <span className="error">Enter valid emaid</span>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12  contact-input-field">
                      <input
                        type="text"
                        name="Address"
                        id="Address"
                        className="form-control"
                        placeholder="Enter your full address"
                        value={address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}
                      />
                      {error && !address && (
                        <span className="error">Enter valid Address </span>
                      )}
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-12 contact-input-field">
                      <input
                        type="text"
                        name="msg"
                        id="msg"
                        className="form-control"
                        placeholder="Enter your message"
                        value={msg}
                        onChange={(e) => {
                          setMsg(e.target.value);
                        }}
                      />
                      {error && !msg && (
                        <span className="error">Enter valid name </span>
                      )}
                    </div>
                  </div>

                    <button
                      onClick={checkValidation}
                      type="submit"
                      className="btn-submit contact-input-field"
                    >
                      SUBMIT
                    </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
