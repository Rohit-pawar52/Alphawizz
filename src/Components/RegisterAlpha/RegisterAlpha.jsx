import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./RegisterAlpha.css";

function LoginRegisterAlpha() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    phone: "",
    // mobileNumber: "",
    // device_name: "", 
    term: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://hellostay.com/api/auth/register", formData);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response ? error.response.data : error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="register-form-alpha">
        <div className="register-form-left">
          <div className="fw-bold home-exit mb-2">
            <Link to="/">BACK</Link>
          </div>
          <div className="logoandtext">
            <div className="logo-alpha">
              <img
                src="/Images/Alpha-images/logo-alpha.png"
                className="img-logo-register"
                alt=""
              />
            </div>
            <div className="logo-text">
              <p className="h4 h1-text">ALPHA</p>
              <p className="fw-bold h2-text">FOOD PLATINUM</p>
            </div>
          </div>
          <p className="h6 fw-bold pt-2">Welcome Back</p>
          <p>Enter your mobile number</p>
          <p>
            <button type="submit" className="login-button-alpha">Login</button>
            <button type="button" className="register-button-alpha m-2">Register</button>
          </p>
          <input
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            placeholder="First Name"
            className="input-button-register"
          />
          <br />
          <input
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            placeholder="Last Name"
            className="input-button-register"
          />
          <br />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input-button-register"
          />
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="input-button-register"
          />
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="input-button-register"
          />
          <br />
          {/* <input
            type="text"
            name="device_name" 
            value={formData.device_name}
            onChange={handleChange}
            placeholder="Device Name"
            className="input-button-register"
          /> */}
          <input
            type="text"
            name="term" 
            value={formData.term}
            onChange={handleChange}
            placeholder="Device Name"
            className="input-button-register"
          />
          <p className="login-otp-button" onClick={handleSubmit}>Submit</p>
        </div>
        <div className="login-register-image">
          <img
            src="Images/Alpha-slider/pizza.jpg"
            alt=""
            style={{ width: "450px", height: "500px" }}
          />
        </div>
      </div>
    </form>
  );
}

export default LoginRegisterAlpha;
