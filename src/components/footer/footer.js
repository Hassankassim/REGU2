import React from 'react';
import REGUlogo from '../../assets/img/netnexa logo.png'
const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 footer-contact">
              <h3> <img width={"30px"} src={REGUlogo} />REGU</h3>
              <p>
                Sayansi Kijitonyama <br />
                Dar es Salaam<br />
                Tanzania <br /><br />
                <strong>Phone:</strong> +255623816748 <br />
                <strong>Email:</strong> hassankassim553@gmail.com<br />
              </p>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="/About">Home</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="/About">About us</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="/About">Services</a>
                </li>
               
                
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">roadmap</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">License & Tax</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i>
                  <a href="#">Economy ChatBot</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right"></i> <a href="#">Regulation Updates and alerts</a>
                </li>
               
              </ul>
            </div>

            <div className="col-lg-4 col-md-6 footer-newsletter">
              <h4>Join Our Team</h4>
              <p>Join our happy community</p>
              <form action="" method="post">
                <input type="email" name="email" /><input
                  type="submit"
                  value="Subscribe"
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-md-flex py-4">
        <div className="me-md-auto text-center text-md-start">
          <div className="copyright">
            &copy; Copyright <strong><span>REGU</span></strong
            >. All Rights Reserved
          </div>
          <div className="credits">Designed by <a href="123">Sani</a></div>
        </div>
        <div className="social-links text-center text-md-right pt-3 pt-md-0">
          <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
          <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
