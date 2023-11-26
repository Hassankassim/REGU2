import React from "react";
import Navbar from "../components/navbar/Navbaruser";
import Button from '../components/button/Button'
import Footer from "../components/footer/footer";
function License() {
  return (
    <>
      <Navbar />
      <h4>Taxation</h4>
      <div className="margintt "> Welcom License</div>
      <p className="red">
        Catering to Tanzania's diverse regulatory landscape, our taxation and
        licensing section provides startups with streamlined guidance and
        essential resources for tax compliance, VAT registration, and business
        licensing requirements. Stay informed and confidently navigate the
        complexities of taxation and licensing with our user-friendly tools
        tailored for your business needs
      </p>
      <p className="center"> <Button name ="Make Payment" /></p>
      <Footer />
    </>
  );
}

export default License;
