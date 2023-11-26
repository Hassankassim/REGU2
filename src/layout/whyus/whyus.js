import React from "react";
import vcfiocn from "../../assets/img/vcard icon2.png";
const WhyUs = () => {
  return (
    <>
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div
            className="col-lg-6 order-1 order-lg-2 bordert"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <div className="center">
              <img
                width="200px"
                className="bordert"
                src={vcfiocn}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
            <div className="center">
              <h1>Why Choose Us?</h1>
            </div>
            <p className="fst-italic center">
              " At REGU, we stand out as your compliance ally, offering a
              comprehensive solution tailored for startups. Our platform
              provides a seamless experience by simplifying complex regulatory
              requirements. With personalized compliance roadmaps, expert
              guidance, and innovative tools like tax and license services,
              compliance checklists, and an insightful economy bot, we empower
              startup owners to navigate regulatory landscapes confidently.
              Additionally, through REGU, users can seamlessly apply for CRDB
              Bank's EMbeju program, ensuring an all-encompassing support system
              for startup success."
            </p>
            <div className="center">
              <a href="/Generate" className="btn-get-started">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="center">
        <hr
          style={{
            width: "20%",
            color: "black",
            marginTop: "80px",
            boxShadow: "#021509",
          }}
        />
      </div>
    </>
  );
};

export default WhyUs;
