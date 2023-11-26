import React from "react";

const JoinUs = () => {
  return (
    <section id="why-us" className="why-us">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-12 d-flex align-items-stretch">
            <div className="content">
              <h3>Join Us on This Journey</h3>
              <p>
                Join REGU's vibrant community and gain access to a wealth of
                resources, expert guidance, and innovative tools designed to
                simplify regulatory compliance for startups. By becoming a part
                of our platform, you'll unlock personalized compliance roadmaps,
                comprehensive checklists, financial assistance services, and the
                insights of our innovative economy bot. Join us today to
                streamline your compliance journey, ensuring your focus remains
                on growing your startup while we take care of your regulatory
                needs
              </p>
              <div className="text-center">
                <a href="/About" className="more-btn">
                  Learn More <i className="bx bx-chevron-right"></i>
                </a>
              </div>
            </div>
          </div>
          <div
            className="col-lg-8 d-flex align-items-stretch"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="icon-boxes d-flex flex-column justify-content-center"></div>
            {/* End .content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
