import React from "react";
import "./FootAlpha.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faWhatsapp,
  faApple,
  faGooglePlay,
} from "@fortawesome/free-brands-svg-icons";
function FootAlpha() {
  return (
    <>
      <div className="footer-alpha1">
        <div className="logoandtext ps-5 ms-5">
          <div className="logo-alpha">
            <img
              src="/Images/Alpha-images/logo-alpha.png"
              className="img-logo"
              alt=""
            />
          </div>
          <div className="logo-text">
            <p className="h2 h1-text">ALPHA</p>
            <p className="fw-bold h2-text">FOOD PLATINUM</p>
          </div>
        </div>
        <div className="foot-text-icons">
          <div className="foot-text h5  text-white">
            <p>FOLLOW US</p>
          </div>
          <div className="foot-icons">
            <div className="social-media-icons">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} className="icon" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faYoutube} className="icon" />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-err text-white">
        <div className="footer-alpha2 text-white">
          <div className="footer-content">
            <h5>FOR RESTAURANTS</h5>
            <p>Partner With Us</p>
            <p>Apps For You</p>
          </div>
          <div className="footer-content">
            <h5>LEARN MORE</h5>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
            <p>Refund & Cancellation</p>
            <p>Return Policies</p>
            <p>Shipping Policies</p>
          </div>
          <div className="footer-content">
            <h5>ABOUT ALPHAFOOD</h5>
            <p>About us</p>
            <p>Contact Us</p>
            <p>My Accounts</p>
          </div>
          <div className="footer-content">
            <h5>
              Download Alpha <br></br>Food Platinum
            </h5>
            <div className="app-download">
              <div className="apple">
                <div>
                <FontAwesomeIcon icon={faApple} />
                </div>
              <div>
                <p className="small-text">Download on the </p>
                <p className="fw-bold fw-bold1">App Store</p>
              </div>
              </div>
              <div className="android">
                <div>
                <FontAwesomeIcon icon={faGooglePlay} />
                </div>
              <div>
              <p className="small-text">Get it on</p>
              <p className="fw-bold fw-bold1">Google Play</p>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright text-center">
          Copyright @ 2024, All Right Reserved @ AlphaFood Platinum TM Ltd.
        </div>
      </div>
    </>
  );
}

export default FootAlpha;
