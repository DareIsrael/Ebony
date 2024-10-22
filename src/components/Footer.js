import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We offer sales of DStv, GOtv, StarTimes, Showmax, as well as subscription services and POS business solutions. Our goal is to provide seamless access to entertainment and financial services for our customers.
          </p>
        </div>

        {/* <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div> */}

        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: ebonyfirstclass@gmail.com</p>
          <p>Phone: 08039540800</p>
          <p>Address: Taisan filling station road, Omuaran</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 ebonyfirstclass | Designed by Brightweb</p>
      </div>
    </footer>
  );
};

export default Footer;
