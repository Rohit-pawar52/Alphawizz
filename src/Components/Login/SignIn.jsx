import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faForward,
  faSquare,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

function SignIn({ toggleForm }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === "username") {
      const usernameRegex = /^[A-Za-z]*$/;
      if (!usernameRegex.test(value)) {
        setErrors({ ...errors, username: "Only alphabets are allowed" });
        return; // Prevent further processing if invalid input is detected
      } else {
        setErrors({ ...errors, username: "" });
      }
    }

    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const errors = {};
    
    const usernameRegex = /^[A-Za-z]+$/;
    if (!formData.username) {
      errors.username = "Username is required";
    } else if (!usernameRegex.test(formData.username)) {
      errors.username = "Username should contain only alphabets without spaces";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 4 || formData.password.length > 12) {
      errors.password = "Password must be between 4 and 12 characters long";
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
        <div className="left1 text-center fw-bold text-white">
          <div className="firstheading">
            <FontAwesomeIcon
              icon={faForward}
              style={{
                color: "#007bff",
                fontSize: "40px",
              }}
            />
            <p className="m-2">Please login with your credentials</p>
          </div>
          <div className="firstheading py-5">
            <p className="h3">HEY! Welcome</p>
            <p className="m-2">Join Us and give information to people</p>
          </div>
        </div>
        <div className="right font-bold text-center pt-4">
          <div className="ps-5 ms-5">
            <p className="h6 ps-5 ms-5 createaccount" onClick={toggleForm}>
              Create a new account
            </p>
          </div>{" "}
          {/* Toggle the form */}
          <h1 className="h3 pt-5 rightheading">Log in</h1>
          <form onSubmit={handleSubmit}>
            <div className="formfields">
              <div className="pt-2 position-relative">
                <FontAwesomeIcon icon={faUser} className="input-icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && (
                  <p className="text-danger">{errors.username}</p>
                )}
              </div>

              <div className="position-relative">
                <FontAwesomeIcon icon={faLock} className="input-icon" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="form-control"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="text-danger">{errors.password}</p>
                )}
              </div>
            </div>
            <div className="show-password-container">
              <p className="forget">Forget Password?</p>
              <p className="see" onClick={() => setShowPassword(!showPassword)}>
                <FontAwesomeIcon
                  icon={showPassword ? faArrowRight : faSquare}
                  className="see-icon pe-2"
                  onClick={() => setShowPassword(!showPassword)}
                />
                {showPassword ? "Hide my Password" : "Show my Password"}
              </p>
            </div>
            <button type="submit" className=" rounded-5 px-5">
              Log in
            </button>
            <div className="social-icons d-flex fw-bold pt-4">
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
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
