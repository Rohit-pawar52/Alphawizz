import React, { useState } from "react";
import "./SignUP.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function SignUp({ toggleForm }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "name") {
      const nameRegex = /^[A-Za-z\s]*$/; 
      if (!nameRegex.test(value)) {
        setErrors({ ...errors, name: "Name can only contain alphabets and spaces" });
      } else {
        setErrors({ ...errors, name: "" });
      }
    }

    if (name === "email") {
      const emailRegex = /^\S+@\S+\.\S+$/;
      if (!emailRegex.test(value)) {
        setErrors({ ...errors, email: "Invalid email format" });
      } else {
        setErrors({ ...errors, email: "" });
      }
    }

    if (name === "password") {
      if (value.length < 6) {
        setErrors({ ...errors, password: "Password must be at least 6 characters long" });
      } else {
        setErrors({ ...errors, password: "" });
      }
    }
  };

  const validate = () => {
    const errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters long";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form data submitted:", formData);
      setErrors({});
    }
  };

  return (
    <>
      <div className="fw-bold home-exit">
        <Link to="/"><a>BACK</a></Link>
      </div>
      <div className="CreateAccount">
        <div className="left text-center fw-bold text-white">
          <div className="firstheading">
            <p className="h3">Welcome Back</p>
            <p className="m-2">
              TO keep connected with us please login with your personal info
            </p>
          </div>
          <div className="px-5 m-5">
            <p className="rounded-5 h6 border p-2" onClick={toggleForm}>SIGN IN</p> {/* Trigger the form switch */}
          </div>
        </div>
        <div className="right font-bold text-center pt-5">
          <h1 className="h3 rightheading">Create Account</h1>
          <div className="social-icons d-flex fw-bold pt-2">
            <div className="social-icon rounded-5">
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="social-icon rounded-5 mx-3">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </div>
            <div className="social-icon rounded-5">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
          </div>

          <p className="h6 pt-3">Or use your email address for registration</p>

          <form onSubmit={handleSubmit}>
            <div className="formfields">
              <div className="pt-2 position-relative">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-danger">{errors.name}</p>}
              </div>

              <div className="my-2 position-relative">
                <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-danger">{errors.email}</p>}
              </div>

              <div className="position-relative">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-danger">{errors.password}</p>}
              </div>
            </div>
            <button type="submit" className="mt-3 rounded-5 px-5">
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
