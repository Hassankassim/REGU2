import React from 'react';
import Netnexalogo from '../../assets/img/netnexa logo.png'
const Navbar = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h4 className="logo me-auto">
          <a href="/">
            <span>
              <img src={Netnexalogo} alt="" />
              REGU
            </span>
          </a>
        </h4>
        {/* Uncomment below if you prefer to use an image logo */}
        {/* <a href="index.html" className="logo me-auto"><img src="assets/img/logo.png" alt="" className="img-fluid" /></a> */}

        <nav id="navbar" className="navbar order-last order-lg-6">
          <ul>
          
            <li><a href="/About">About Us</a></li>
          
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* .navbar */}

        <a href="/Generate" className="get-started-btn">
          Get Started
        </a>
      </div>
    </header>
  );
};

export default Navbar;
