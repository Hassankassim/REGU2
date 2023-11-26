import { Route,Router, Routes ,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./layout/about/About";
import Generate from "./buckets/generate";
import Saving from './Saving'
import Contact1 from "./buckets/contacts1";
import SavingNew from "./Savingnew";
import License from './categories/License'
import Roadmap from './categories/Roadmap'
import Sarufi from './categories/Sarufi'

import Dashboard from "./user/Dashboard";

const WebsiteRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home />} /> {/* 👈 Renders at /app/ */}
          <Route path="/contact" element={ <Contact1 />} /> {/* 👈 Renders at /app/ */}
          <Route path="/Generate" element={ <Generate />} /> 
          <Route path="/About" element={ <About />} />
          <Route path="/Saving" element={ <Saving />} />
          <Route path="/SavingNew" element={ <SavingNew />} />
          <Route path="/License" element={ <License />} />
          <Route path="/Roadmap" element={ <Roadmap />} />
          <Route path="/Sarufi" element={ <Sarufi />} />
          <Route path="/Dashboard" element={ <Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
  export default WebsiteRouter;