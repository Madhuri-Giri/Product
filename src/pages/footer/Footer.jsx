import React from "react";
import "./Footer.css";
import { Link } from 'react-router-dom';
// import mainLogoF from "../../assets/images/mainLogo-removebg-preview.png";

const Footer = () => {
  return (
    <>
    <div className="footer-main">
      <div className="footer">
        <div className="f-left">
          

          <div className="one">
            <h1>ABOUT US</h1>
            <div>
              <a href="/">
                <p>Our Philosophy</p>
              </a>
              <a href="/">
                <p>Social Responsibility</p>
              </a>
              <a href="/">
                <p>Policies</p>
              </a>
              <a href="/">
                <p>Terms</p>
              </a>
              <a href="/">
                <p>FAQs</p>
              </a>
            </div>
          </div>

          <div className="one">
            <h1>QUICK LINKS</h1>
            <div>
              <a href="/projects/Jhindrop/company-profile">
                <p>Company Profile</p>
              </a>
              <a href="/projects/Jhindrop/products">
                <p>Our Products</p>
              </a>
              {/* <a href="/"> <p>Policies</p> </a>
                          <a href="/"> <p>Terms</p> </a>
                          <a href="/"> <p>FAQs</p> </a> */}
            </div>
          </div>

        </div>

        <div className="f-right">
          <div className="one">
            <h1>OUR PRODUCTS</h1>
            <div>
              <a href="/projects/Jhindrop/products">
                <p>product</p>
              </a>
              <a href="projects/Jhindrop/products">
                <p>product</p>
              </a>
              <a href="projects/Jhindrop/products">
                <p>product</p>
              </a>
              <a href="projects/Jhindrop/products">
                <p>product</p>
              </a>
              <a href="projects/Jhindrop/products">
                <p>product</p>
              </a>
            </div>
          </div>

          <div className="one">
            <h1>CONTACT US</h1>
            <div>
              <a href="/projects/Jhindrop/contact">
                <p>
                  Email: <br />
                  service@forestessentialsindia.com
                </p>
              </a>
              <a href="/projects/Jhindrop/contact">
                <p>
                  Phone: <br /> +91-8010200666
                </p>
              </a>
            </div>
            <div className="media">
              <a href="/projects/Jhindrop/contact">
                <i class="ri-youtube-line"></i>
              </a>
              <a href="/projects/Jhindrop/contact">
                
                <i class="ri-twitter-line"></i>
              </a>
              <a href="/projects/Jhindrop/contact">
                <i class="ri-facebook-circle-line"></i>
              </a>
              <a href="/projects/Jhindrop/contact">
                <i class="ri-instagram-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    <div className="footer-copyright">
    <p>© 2024 <Link to='/projects/Jhindrop'>Forest Essentials India Pvt. Ltd</Link>. All Rights Reserved.</p>
  </div>
  </>
  );
};

export default Footer;
