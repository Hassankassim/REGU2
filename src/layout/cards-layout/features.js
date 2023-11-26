import React from 'react';

const FeaturesSection = () => {
  return (
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">
        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line" style={{ color: '#ffbb2c' }}></i>
              <h3><a href="/About">Talk To Us</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line" style={{ color: '#5578ff' }}></i>
              <h3><a href="/About">Join in Our Team</a></h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-fingerprint-line" style={{ color: '#29cc61' }}></i>
              <h3><a href="/About">Let's Have a Cup of Coffee</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
