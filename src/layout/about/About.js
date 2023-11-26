import React from "react";
import Navbar from "../../components/navbar/navbar";
import heroimg from "../../assets/img/mobiledubu.png";
import heroimg1 from "../../assets/img/hero1.jpeg";
const About = () => {
  return (
    <>
      <Navbar />
      <div className="aboutcard">
        <div className="about margint">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div
                id="bordert1"
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img
                  className="bordert"
                  src={heroimg}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <h3 className="center">
                Welcome to REGU - Your Compliance Companion for Success
              </h3>
              <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content margint">
                <p className="fst-italic center containerwhyus">
                  Welcome to REGU, where we serve as your dedicated compliance
                  partner, empowering your journey towards success by
                  simplifying complex regulatory requirements..
                </p>
                <ul></ul>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg-6 order-1 order-lg-2"
                data-aos="fade-left"
                data-aos-delay="100"
              >
                <img
                  className="bordert2 center"
                  src={heroimg1}
                  width={"300px"}
                  className="img-fluid"
                  alt=""
                />
              </div>
              <br />
              <hr />
              <br />
              <h1 className="center margint">Mission and Commitment</h1>

              <div className="col-lg-6 pt-4 pt-lg-0 order-1 order-lg-2 content">
                <p className="fst-italic margint center containerwhyus marginl">
                  Our mission is to empower startups with tools and guidance for
                  confident navigation of regulatory landscapes. Through our
                  user-friendly platform, we ensure seamless compliance
                  management, allowing startups to focus on growth while
                  entrusting their compliance needs to us. At [Your Company
                  Name], we're dedicated to being the catalyst for startup
                  success by guiding compliance and fostering long-term
                  sustainability..
                </p>
                <ul></ul>
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
