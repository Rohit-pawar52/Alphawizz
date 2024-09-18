import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./LoginAlpha.css";

function LoginRegisterAlpha() {
  // State for the form inputs
  const [formData, setFormData] = useState({
    mobileNumber: "",
    email: "",
    password: "",
    device_name: "", // Default device name
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://hellostay.com/api/auth/login", formData);
      console.log("API Response:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error.response ? error.response.data : error);
    }
  };

  return (
    <>
      <div className="login-register-alpha">
        <div className="login-register-form">
          <div className="fw-bold home-exit mb-4">
            <Link to="/">BACK</Link>
          </div>
          <div className="logoandtext">
            <div className="logo-alpha">
              <img
                src="/Images/Alpha-images/logo-alpha.png"
                className="img-logo"
                alt="logo"
              />
            </div>
            <div className="logo-text">
              <p className="h2 h1-text">ALPHA</p>
              <p className="fw-bold h2-text">FOOD PLATINUM</p>
            </div>
          </div>
          <p className="h4 fw-bold py-3">Welcome Back</p>
          <p>Enter your details to login</p>
          <form onSubmit={handleSubmit}> {/* Form submission */}
            {/* Mobile Number Input */}
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Mobile Number"
              className="Input-button-login"
            />
            <br />
            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="Input-button-login"
            />
            <br />
            {/* Password Input */}
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="Input-button-login"
            />
             <input
            type="text"
            name="device_name" 
            value={formData.device_name}
            onChange={handleChange}
            placeholder="Device Name"
            className="input-button-register"
          />
            <br />
            {/* Login Button */}
            <button type="submit" className="login-button">Login</button>
          </form>
          <p className="login-otp-button">Send Otp</p>
        </div>
        <div className="login-register-image">
          <img
            src="Images/Alpha-slider/pizza.jpg"
            alt="Pizza"
            style={{ width: "450px", height: "450px" }}
          />
        </div>
      </div>
    </>
  );
}

export default LoginRegisterAlpha;
