import React from "react";
import Hero from "./layout/hero/hero";
import Navbar from "./components/navbar/navbar";
import WhyUs from "./layout/whyus/whyus";
import Footer from "./components/footer/footer";
import JoinUs from "./layout/joinus/joinus";
import Cardlayout from "./layout/cards-layout/cards";
import FeaturesSection from "./layout/cards-layout/features";
import CardWork from "./components/cards/cardwork";
import Count from "./counts/count";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style.css'
function Home() {
  return (
    <>
 
      <Navbar />
      <Hero />
      {/* the get started page */}
      
       <div className="margint">
        {/* how it works page */}
      <WhyUs />
      </div>
      {/* cards */}
     <Cardlayout />

     <JoinUs />
     <FeaturesSection />
<Footer />
      
    </>
  );
}

export default Home;
